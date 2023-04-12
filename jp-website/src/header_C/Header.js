import React, { useState } from 'react';
import './Header.css';

const Header = ({ setActiveNavItem, activeNavItem }) => {
    const handleNavItemClick = (navItem) => {
      setActiveNavItem(navItem);
    };
  
    return (
      <header class='jp_header'>
        <h2 class="header_name">João Diogo</h2>
        <nav class='header_nav'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Experience</a>
            <a href='#'>Contact</a>
        </nav>
      </header>
    );
  }; 
  
  export default Header;