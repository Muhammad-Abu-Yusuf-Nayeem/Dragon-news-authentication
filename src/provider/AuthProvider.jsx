import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

// import React from 'react';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log("Auth provider user:", user);

  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, setUser, createNewUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser);
      console.log("Auth state changed:", currentUser);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
