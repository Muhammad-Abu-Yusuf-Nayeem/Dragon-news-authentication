import { createContext, useState } from "react";
import PropTypes from "prop-types";



// import React from 'react';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "vujong@dot.com",
  });

  const authInfo = { user, setUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthProvider;
