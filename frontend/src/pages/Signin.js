// src/Signin.js
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signIn(email, password)) {
      navigate.push("/");
    } else {
      alert("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className="container">
      <h2>Signin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Signin</button>
      </form>
    </div>
  );
};

export default Signin;

















