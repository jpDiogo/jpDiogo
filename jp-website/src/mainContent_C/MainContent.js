import React from 'react';
import './MainContent.css';
import Home from './home_C/Home';

const MainContent = ({ activeNavItem, CONFIG }) => {
  let content;

  function getHome() { return (<Home/>); }


  switch(activeNavItem) {
    case CONFIG.HOME:
      content = getHome();
    break;
    case CONFIG.ABOUT:
      console.log('ABOUT');
      //content = getHome();
    break;
    case CONFIG.EXPERIENCE:
      console.log('EXPERIENCE');
      //content = getHome();
    break;
    case CONFIG.CONTACT:
      console.log('CONTACT');
      //content = getHome();
    break;
    default:
      console.log("MainContent: Switch error");
  }

  return (
    <div className="container jp_mainContent">
      {content}
    </div>
  );
};

export default MainContent;
