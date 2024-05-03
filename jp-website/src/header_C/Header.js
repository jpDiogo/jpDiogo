import './Header.css';

const Header = ({ setActiveNavItem, activeNavItem, CONFIG }) => {
    // Responsible for handling each nav item option
    const handleNavItemClick = (navItem) => () => {
      setActiveNavItem(navItem);
    };
  
    return (
      <header className='jp_header p-5 d-flex justify-content-between align-items-center'>
        <h2 className="header_name">João Diogo</h2>
        <nav className='header_nav'>
          <button className={activeNavItem === CONFIG.HOME ? 'active' : ''} onClick={handleNavItemClick(CONFIG.HOME)}>Home</button>
          <button className={activeNavItem === CONFIG.ABOUT ? 'active' : ''} onClick={handleNavItemClick(CONFIG.ABOUT)}>About</button>
          <button className={activeNavItem === CONFIG.EXPERIENCE ? 'active' : ''} onClick={handleNavItemClick(CONFIG.EXPERIENCE)}>Experience</button>
          <button className={activeNavItem === CONFIG.CONTACT ? 'active' : ''} onClick={handleNavItemClick(CONFIG.CONTACT)}>Contact</button>
        </nav>
      </header>
    );
};

export default Header;
