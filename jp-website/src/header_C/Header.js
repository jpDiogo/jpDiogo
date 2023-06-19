import './Header.css';

const Header = ({ setActiveNavItem, CONFIG }) => {
    const handleNavItemClick = (navItem) => {
      setActiveNavItem(navItem);
    };
  
    return (
      <header className='jp_header'>
        <h2 className="header_name">João Diogo</h2>
        <nav className='header_nav'>
            <a href='#' onClick={() => handleNavItemClick(CONFIG.HOME)} >Home</a>
            <a href='#' onClick={() => handleNavItemClick(CONFIG.ABOUT)}>About</a>
            <a href='#' onClick={() => handleNavItemClick(CONFIG.EXPERIENCE)}>Experience</a>
            <a href='#' onClick={() => handleNavItemClick(CONFIG.CONTACT)}>Contact</a>
        </nav>
      </header>
    );
  }; 
  
  export default Header;