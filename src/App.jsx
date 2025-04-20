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
          <p>made by Naitik Verma</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 