import React, { useState, useEffect } from 'react';

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

  return (
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
        <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            &#9776;
        </div>

        {/* Mobile Popup Nav */}
        {isOpen && (
          <div className={`mobile-nav-popup ${isOpen ? 'active' : ''}`}>
            <div className="mobile-nav-close" onClick={() => setIsOpen(false)}>
              ×
            </div>
            <ul>
              <li><button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>Home</button></li>
              <li><a href="#About" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#Education" onClick={() => setIsOpen(false)}>Education</a></li>
              <li><a href="#Skills" onClick={() => setIsOpen(false)}>Skills</a></li>
              <li><a href="#Experience" onClick={() => setIsOpen(false)}>Experience</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
              <li><a href="#Contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
