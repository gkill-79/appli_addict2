

const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.status(403).json({ error: "No token provided" });
  } else {
    jwt.verify(token, "your_secret_key", (err, decoded) => {
      if (err) {
        res.status(401).json({ error: "Unauthorized" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
}

module.exports = isAuthenticated;
















