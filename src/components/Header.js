import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="uk-navbar-container" uk-sticky="true">
      <div className="uk-container">
        <nav className="uk-navbar">
          <div className="uk-navbar-left">
            <div className="uk-navbar-item uk-padding-remove-left">
              <img 
                src="https://devgrovestechnologies.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.d45a006c.png&w=128&q=75" 
                alt="DevGroves Logo"
                width="40" 
                height="40"
                style={{ 
                  verticalAlign: 'middle',
                  transition: 'transform 0.3s ease'
                }}
                className="uk-logo"
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav" style={{ gap: '0.5rem' }}>
              <li className="uk-active">
                <Link 
                  to="hero" 
                  smooth={true} 
                  duration={500} 
                  offset={-70}
                  className="uk-text-capitalize"
                  activeClass="active-nav-item"
                  spy={true}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="services" 
                  smooth={true} 
                  duration={500}
                  className="uk-text-capitalize"
                  activeClass="active-nav-item"
                  spy={true}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="About" 
                  smooth={true} 
                  duration={500}
                  className="uk-text-capitalize"
                  activeClass="active-nav-item"
                  spy={true}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500}
                  className="uk-text-capitalize"
                  activeClass="active-nav-item"
                  spy={true}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="uk-divider-icon"></div>
    </header>
  );
};

export default Header;