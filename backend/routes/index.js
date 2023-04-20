const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require('../config/security.config');

router.use('/users', userRoutes);
router.use('/auth', authRoutes);

router.get('/protected', ensureAuthenticated, (req, res) => {
  res.render('protected');
});

router.get('/profile', ensureAuthenticated, (req, res) => {
  res.render('profile', { user: req.user });
});

router.get('/',  (req, res) => {
  res.render('index', { user: req.user });
});

module.exports = router;
