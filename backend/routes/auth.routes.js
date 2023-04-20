// const {  signinForm, signin, signout} = require('../controllers/auth.controller');
// const router = require('express').Router();

// router.get('/signin/form', signinForm);
// router.post('/signin', signin);
// router.get('/signout', signout);

// module.exports = router;





const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { db } = require("./app");
const jwt = require("jsonwebtoken");


router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const { signinForm, signin, signout } = require('../controllers/auth.controller');
const router = require('express').Router();

router.get('/signin/form', signinForm);
router.post('/signin', signin);
router.get('/signout', signout);

module.exports = router;


  const query = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(query, [email, hashedPassword], (err, result) => {
    if (err) {
      res.status(500).json({ error: "An error occurred during registration" });
    } else {
      res.status(200).json({ message: "User registered successfully" });
    }
  });
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const query = "SELECT * FROM users WHERE email = ?";
  db.query(query, [email], async (err, result) => {
    if (err) {
      res.status(500).json({ error: "An error occurred during login" });
    } else {
      const user = result[0];
      if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({ message: "Logged in successfully" });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    }
  });
});

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
  
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, result) => {
      if (err) {
        res.status(500).json({ error: "An error occurred during login" });
      } else {
        const user = result[0];
        if (user && (await bcrypt.compare(password, user.password))) {
          const token = jwt.sign({ id: user.id }, "your_secret_key", {
            expiresIn: "1h",
          });
          res.status(200).json({ message: "Logged in successfully", token });
        } else {
          res.status(401).json({ error: "Invalid email or password" });
        }
      }
    });
  });

// router.post("/signup", async (req, res) => {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const query = "INSERT INTO users (email, password) VALUES (?, ?)";
// });




module.exports = router;















