import React, { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <RegistrationForm />
      </main>
      <footer className="footer">
        <div className="contact-info">
          <p>Contact: roboticsclubmanit</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 