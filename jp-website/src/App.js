import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header_C/Header';
import Home from './home_C/Home';
import Experience from './experience_C/Experience';
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
        console.log('> Home page entered.');
        return <Home/>;
      case CONFIG.ABOUT:
        console.log('> About page entered.');
        return <div>About</div>;
      case CONFIG.EXPERIENCE:
        console.log('> Experience page entered.');
        return <Experience/>;
      case CONFIG.CONTACT:
        console.log('> Contact page entered.');
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
