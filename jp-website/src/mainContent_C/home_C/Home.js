import React, { useEffect, useState } from 'react';
import './Home.css';

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const basketballPlayerStyle = {
    transform: `translate3d(0, ${scrollPosition * 0.5}px, 0)`,
  };

  const fansStyle = {
    transform: `translate3d(0, ${scrollPosition * 0.2}px, 0)`,
  };

  return (
    <div className="parallax-container">
      <div className="basketball-court" />
      <img
        className="basketball-player"
        src="/basketball-player.png"
        style={basketballPlayerStyle}
      />
      <img className="fans" src="/fans.png" style={fansStyle} />
    </div>
  );
}

export default Home;
