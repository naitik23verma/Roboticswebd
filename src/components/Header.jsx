import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>AUTOMAX WORKSHOP</h1>
      <div className="header-content">
        <h2>Robotics Workshop Registration</h2>
        <p>
          Join us for a two-day long workshop on Robotics. Get hands-on experience with:
        </p>
        <ul>
          <li>Arduino microcontrollers</li>
          <li>Hardware interfacing</li>
          <li>Sensors integration</li>
          <li>Computer Aided Design (CAD)</li>
          <li>And much more!</li>
        </ul>
      </div>
    </header>
  );
}

export default Header; 