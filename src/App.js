import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import MainContent from './MainContent';
import { AuthProvider } from './AuthContext';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';


import './Header.css';
import './Footer.css';

function App() {
  return (
    <AuthProvider>
       <Router>
      <Header />
      <Routes>
      
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path = "/" element = {  <MainContent />}/>
        
      </Routes>
    
      <Footer />
    </Router>
    </AuthProvider>
   
  );
}

export default App;
