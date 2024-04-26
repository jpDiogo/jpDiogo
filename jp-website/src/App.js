import { useState } from 'react';
import Header from './header_C/Header';
import World from './threejs_C/World';
import './App.css';

const CONFIG = {
  HOME: 'home',
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  CONTACT: 'contact'
}

function App() {
  const [activeNavItem, setActiveNavItem] = useState(CONFIG.HOME);

  const renderContent = () => {
    switch (activeNavItem) {
      case CONFIG.HOME:
        return <World/>;
      case CONFIG.ABOUT:
        return <div>About</div>;
      case CONFIG.EXPERIENCE:
        return <div>Experience</div>;
      case CONFIG.CONTACT:
        return <div>Contact</div>;
      default:
        return <div>Home</div>;
    }
  
  }

  return (
    <div>
      <Header setActiveNavItem={setActiveNavItem} activeNavItem={activeNavItem} CONFIG={CONFIG}/>
      <div className='mainContent'>
        {renderContent()}
      </div>
    </div>
  );
}


export default App;
