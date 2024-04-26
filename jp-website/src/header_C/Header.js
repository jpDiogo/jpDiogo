import './Header.css';

const Header = ({ setActiveNavItem, CONFIG }) => {
    const handleNavItemClick = (navItem) => () => {
      setActiveNavItem(navItem);
    };
  
    return (
      <header className='jp_header'>
        <h2 className="header_name">João Diogo</h2>
        <nav className='header_nav'>
            <button onClick={handleNavItemClick(CONFIG.HOME)} >Home</button>
            <button onClick={handleNavItemClick(CONFIG.ABOUT)}>About</button>
            <button onClick={handleNavItemClick(CONFIG.EXPERIENCE)}>Experience</button>
            <button onClick={handleNavItemClick(CONFIG.CONTACT)}>Contact</button>
        </nav>
      </header>
    );
};

export default Header;
