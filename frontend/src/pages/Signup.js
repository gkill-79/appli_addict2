// src/Signup.js
import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrement des informations d'identification dans votre API
    console.log(credentials);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="signup-container">
      <h1>Créer un compte</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Identifiant :</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Créer un compte</button>
      </form>
    </div>
  );
};

export default Signup;














