


// src/AuthContext.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const signIn = (email, password) => {
    // Vérifier l'authentification de l'utilisateur avec votre API ou service d'authentification
    // Si l'authentification est réussie, mettez à jour les états isAuthenticated et user
    setIsAuthenticated(true);
    setUser({ email: email, password: password });
  };

  const signOut = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;




















