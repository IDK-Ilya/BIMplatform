import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AccessibilityProvider, useAccessibility } from './AccessibilityContext';
import 'bootstrap/dist/css/bootstrap.css';

// Import all components, standard and accessible
import Header from './Header';
import HeaderAccessible from './HeaderAccessible';
import Footer from './Footer';
import FooterAccessible from './FooterAccessible';
import MainContent from './MainContent';
import MainContentAccessible from './MainContentAccessible';

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AuthProvider from './AuthContext'; // Importing AuthProvider correctly
// Styles
import './Header.css';
import './Footer.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AccessibilityProvider>
          <DynamicComponents />
        </AccessibilityProvider>
      </Router>
    </AuthProvider>
  );
}

// Component to handle the dynamic rendering based on accessibility state
function DynamicComponents() {
  const { isAccessible } = useAccessibility();
  
  const DynamicHeader = isAccessible ? HeaderAccessible : Header;
  const DynamicFooter = isAccessible ? FooterAccessible : Footer;
  const DynamicMainContent = isAccessible ? MainContentAccessible : MainContent;

  return (
    <>
      <DynamicHeader />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<DynamicMainContent />} />
      </Routes>
      <DynamicFooter />
    </>
  );
}

export default App;
