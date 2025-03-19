import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          Jefferson Lopez
        </NavLink>

        <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </NavLink>
          <NavLink to="/technical" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Habilidades Técnicas
          </NavLink>
          <NavLink to="/social" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Habilidades Sociales
          </NavLink>
          <NavLink to="/experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Experiencia
          </NavLink>
          <NavLink to="/studies" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Estudios
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;