import React from 'react';

const MainContent = ({ activeNavItem }) => {
  let content;
  if (activeNavItem === 'home') {
    content = (
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    );
  } else if (activeNavItem === 'about') {
    content = (
      <div>
        <h1>About</h1>
        <p>Learn more about our company.</p>
      </div>
    );
  } else if (activeNavItem === 'contact') {
    content = (
      <div>
        <h1>Contact</h1>
        <p>Get in touch with us.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {content}
    </div>
  );
};

export default MainContent;
