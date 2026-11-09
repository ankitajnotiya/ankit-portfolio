import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const mobileMenu = isOpen && createPortal(
    <div
      className="mobile-nav-popup"
      onClick={(event) => {
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <nav className="mobile-nav-panel" id="mobile-navigation" aria-label="Mobile navigation">
        <button
          className="mobile-nav-close"
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
        >
          ×
        </button>
        <ul>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#About" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#Education" onClick={() => setIsOpen(false)}>Education</a></li>
          <li><a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#Experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </div>,
    document.body
  );

  return (
    <>
      <div className="container">
        <header>
          <div className="logo">
            <div className="logo-circle">
              <img src="/assets/ankit.jpeg" alt="Ankit" className="logo-image" />
            </div>
            <span style={{ color: '#00B7FF' }}>Ankit</span>
          </div>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Education">Education</a></li>
              <li><a href="#Skills">Skills</a></li>
              <li><a href="#Experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#Contact">Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Menu Icon */}
          <button
            className="nav-toggle"
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </header>
      </div>

      {mobileMenu}
    </>
  );
};

export default Header;
