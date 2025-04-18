import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = ({ isLoggedIn }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const styles = {
    navbar: {
      backgroundColor: '#4E342E',
      color: 'white',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: "'Quicksand', sans-serif",
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontFamily: "'Pacifico', cursive",
      fontSize: '24px',
      color: '#fff',
      textDecoration: 'none',
    },
    logoImage: {
      height: '42px',
      width: '42px',
      objectFit: 'contain',
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
    },
    bar: {
      width: '25px',
      height: '3px',
      backgroundColor: '#fff',
      margin: '4px 0',
      borderRadius: '2px',
    },
    navLinks: {
      display: 'flex',
      gap: '30px',
      listStyle: 'none',
      alignItems: 'center',
    },
    navLinkItem: {
      textDecoration: 'none',
      color: '#FFF8F0',
      fontWeight: '600',
      fontSize: '17px',
      textTransform: 'uppercase',
      transition: 'color 0.3s',
    },
    mobileMenu: {
      position: 'absolute',
      top: '70px',
      left: 0,
      width: '100%',
      backgroundColor: '#4E342E',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '15px 0',
      gap: '15px',
    },
    rightSection: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
    },
    searchInput: {
      padding: '7px 12px',
      borderRadius: '6px',
      border: 'none',
      outline: 'none',
      fontFamily: "'Quicksand', sans-serif",
    },
    loginBtn: {
      color: '#fff',
      textDecoration: 'none',
      backgroundColor: '#8D6E63',
      padding: '7px 14px',
      borderRadius: '6px',
      fontWeight: '600',
    },
  };

  if (location.pathname === '/') return null;

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@400;600&display=swap');

          .logo-container:hover {
            transform: translateY(-5px);
            transition: transform 0.3s ease-in-out;
          }

          .nav-link:hover {
            color: #FFD180;
          }

          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }

            .hamburger {
              display: flex !important;
            }

            .right-section {
              display: none !important;
            }
          }
        `}
      </style>

      <nav style={styles.navbar}>
        <Link to="/" style={styles.logoContainer} className="logo-container">
          <img src={logo} alt="Logo" style={styles.logoImage} />
          ChocoShop
        </Link>

        <div className="hamburger" style={styles.hamburger} onClick={toggleMenu}>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
          <div style={styles.bar}></div>
        </div>

        <ul style={styles.navLinks} className="desktop-menu">
          <li><Link to="/" style={styles.navLinkItem} className="nav-link">Home</Link></li>
          <li><Link to="/products" style={styles.navLinkItem} className="nav-link">Shop</Link></li>
          <li><Link to="/about" style={styles.navLinkItem} className="nav-link">About</Link></li>
        </ul>

        <div style={styles.rightSection} className="right-section">
          <input type="text" placeholder="Search..." style={styles.searchInput} />
          <Link to={isLoggedIn ? "/profile" : "/login"} style={styles.loginBtn}>
            {isLoggedIn ? "Profile" : "Login"}
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          <Link to="/" style={styles.navLinkItem} className="nav-link" onClick={toggleMenu}>Home</Link>
          <Link to="/products" style={styles.navLinkItem} className="nav-link" onClick={toggleMenu}>Shop</Link>
          <Link to="/about" style={styles.navLinkItem} className="nav-link" onClick={toggleMenu}>About</Link>
          <Link to={isLoggedIn ? "/profile" : "/login"} style={styles.loginBtn} onClick={toggleMenu}>
            {isLoggedIn ? "Profile" : "Login"}
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
