import React from 'react';
import { SunIcon, MoonIcon } from './Icons';

function Header({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo-circle">
          <span className="navbar-logo-icon">⚡</span>
        </div>
        <div className="navbar-brand-details">
          <span className="navbar-brand-title">Mini Boutique</span>
          <span className="navbar-brand-tagline">Boutique Électronique</span>
        </div>
      </div>
      <div className="navbar-right">
        <button 
          className="navbar-action-btn" 
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Mode clair" : "Mode sombre"}
          aria-label="Changer le thème"
        >
          {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
}

export default Header;