import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="uk-navbar-container" data-uk-sticky="top: 100; animation: uk-animation-slide-top">
      <div className="uk-container uk-container-expand">
        <nav className="uk-navbar" data-uk-navbar>
          <div className="uk-navbar-left">
            <div className="uk-navbar-item">
              <img 
                src="https://devgrovestechnologies.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d45a006c.png&w=128&q=75" 
                alt="DevGroves Logo"
                className="uk-logo"
                style={{ 
                  height: '40px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </div>

          <div className="uk-navbar-right uk-visible@m">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="hero" smooth={true} duration={500} offset={-90} spy={true}>Home</Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-90}>Services</Link>
              </li>
              <li>
                <Link to="About" smooth={true} duration={500} offset={-90}>About</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-90}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right uk-hidden@m">
            <button 
              className="uk-navbar-toggle" 
              data-uk-toggle="target: #mobile-menu"
              type="button"
            >
              <span data-uk-navbar-toggle-icon></span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <button className="uk-offcanvas-close" type="button" data-uk-close></button>
          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li><Link to="hero" smooth={true} duration={500} offset={-90}>Home</Link></li>
            <li><Link to="services" smooth={true} duration={500} offset={-90}>Services</Link></li>
            <li><Link to="About" smooth={true} duration={500} offset={-90}>About</Link></li>
            <li><Link to="contact" smooth={true} duration={500} offset={-90}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;