import React from 'react';
import './MainContent.css';
import './home_C/Home.js';

const MainContent = ({ activeNavItem }) => {
  let content;
  let HOME = 'home';
  let ABOUT = 'about';
  let EXPERIENCE = 'experience';
  let CONTACT = 'contact';

  function getHome() { return (<Header/>);}


  switch(activeNavItem) {
    case HOME:
      content = getHome();
    break;
    case ABOUT:
      content = getHome();
    break;
    case EXPERIENCE:
      content = getHome();
    break;
    case CONTACT:
      content = getHome();
    break;
  }

  return (
    <div className="container jp_mainContent">
      {content}
    </div>
  );
};

export default MainContent;
