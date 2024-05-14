import axios from "axios";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Function to set the authentication token
  const saveToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
    axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
  };

  const login = (userData) => {
    // Here, you should set token based on userData if available
    // This is a placeholder; implement according to your backend response
    saveToken(userData.token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common["Authorization"];
    setToken(null);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // Memoized value of the authentication context
  const contextValue = useMemo(() => ({
    token,
    setToken: saveToken,
    login,
    logout
  }), [token]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
