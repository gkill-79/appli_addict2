



import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import './Header.css';


const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <div className="logo">Logo</div>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/counter">Compteur</Link>
          </li>
          <li>
            <Link to="/advice">Conseils</Link>
          </li>
        </ul>
        <div className="account-section">
          {!isAuthenticated && (
            <>
              <Link to="/signin">Connexion</Link>
              <Link to="/signup">Inscription</Link>
            </>
          )}
          {isAuthenticated && (
            <>
              <span>Compte</span>
              <button onClick={logout}>Déconnexion</button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;




















