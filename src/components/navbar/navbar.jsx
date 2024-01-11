import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="nav-links">
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link to="/contact" onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
