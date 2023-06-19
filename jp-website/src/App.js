import React, { useState } from 'react';
import Header from './header_C/Header';
import MainContent from './mainContent_C/MainContent';
import './App.css';

const CONFIG = {
  HOME: 'home',
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  CONTACT: 'contact'
}

function App() {
  const [activeNavItem, setActiveNavItem] = useState(CONFIG.HOME);

  return (
    <div>
      <Header setActiveNavItem={setActiveNavItem} CONFIG={CONFIG}/>
      <MainContent activeNavItem={activeNavItem} CONFIG={CONFIG}/>
    </div>
  );
}


export default App;
