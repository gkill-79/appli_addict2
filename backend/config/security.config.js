

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// Importer le fichier de configuration de sécurité
const config = require("./jwt.config");


// Utiliser la clé secrète JWT pour générer un token
app.get("/generer-token", (req, res) => {
  const token = jwt.sign({ id: 123 }, config.jwtSecret);
  res.send(token);
});

// Vérifier un token avec la clé secrète JWT
app.get("/verifier-token", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    res.send(decoded);
  } catch (e) {
    res.status(401).send("Token invalide");
  }
});

// Démarrer le serveur
app.listen(3090, () => {
  console.log("Serveur en écoute sur le port 3000");
});




















