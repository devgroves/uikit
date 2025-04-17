import React from 'react';

const Footer = () => {
  return (
    <footer className="uk-section uk-section-secondary uk-padding-remove-bottom">
      <div className="uk-container">
        <div className="uk-grid">
          <div className="uk-width-1-1 uk-text-center">
            <p>Copyright © {new Date().getFullYear()} DevGroves Technologies.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;