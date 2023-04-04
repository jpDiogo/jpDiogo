import React, { useState } from 'react';

const Header = ({ setActiveNavItem, activeNavItem }) => {
    const handleNavItemClick = (navItem) => {
      setActiveNavItem(navItem);
    };
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">My App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className={`nav-item ${activeNavItem === 'home' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => handleNavItemClick('home')}>Home</a>
            </li>
            <li className={`nav-item ${activeNavItem === 'about' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => handleNavItemClick('about')}>About</a>
            </li>
            <li className={`nav-item ${activeNavItem === 'contact' ? 'active' : ''}`}>
              <a className="nav-link" href="#" onClick={() => handleNavItemClick('contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Header;