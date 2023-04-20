


import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenue sur l'application!</h1>
      <nav>
        <Link to="/counter">Compteur</Link>
        <Link to="/advice">Conseils</Link>
      </nav>
    </div>
  );
};

export default Home;




















