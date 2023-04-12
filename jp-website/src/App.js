import React, { useState } from 'react';
import Header from './header_C/Header';
import MainContent from './mainContent_C/MainContent';
import './App.css';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('home');

  return (
    <div>
      <Header setActiveNavItem={setActiveNavItem} activeNavItem={activeNavItem} />
      <MainContent activeNavItem={activeNavItem} />
    </div>
  );
}

export default App;
