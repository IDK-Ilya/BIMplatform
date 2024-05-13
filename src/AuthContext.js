import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [email, setEmail] = useState(() => {
    // Пытаемся получить email пользователя из localStorage при инициализации
    const savedEmail = localStorage.getItem('userEmail');
    console.log('Loading email from localStorage:', savedEmail);
    return savedEmail;
  });

  useEffect(() => {
    // Следим за изменениями в email и обновляем localStorage
    console.log('Email state has changed:', email);
    if (email) {
      localStorage.setItem('userEmail', email);
    } else {
      localStorage.removeItem('userEmail');
    }
  }, [email]);

  const login = (userData) => {
    console.log('Logging in user:', userData);
    setEmail(userData.email);  // предполагаем, что userData содержит поле email
  };

  const logout = () => {
    console.log('Logging out user');
    setEmail(null);  // Это также вызовет удаление 'userEmail' из localStorage из-за useEffect
  };

  const isAuthenticated = email !== null;

  return (
    <AuthContext.Provider value={{ email, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
