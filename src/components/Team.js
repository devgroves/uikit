import React from 'react';
import { Link } from 'react-scroll';

const Team = () => {
  return (
  <section id="About" className="uk-section"style={{ paddingTop: '40px' }} >
      
      <div className="uk-container">
      
        <div 
          className="uk-flex uk-flex-between uk-flex-middle" 
          uk-grid="true"
          uk-margin-medium-top="true"
          style={{
            flexDirection: window.innerWidth >= 960 ? 'row' : 'column'
          }}
        >
          <div className="uk-width-1-2@m uk-width-1-1">
            <div className="uk-text-center">
              <img 
                src="https://devgrovestechnologies.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.330a5566.png&w=1200&q=75"               
              />
            </div>
          </div>
          <div className="uk-width-1-2@m uk-width-1-1">
            <div>
              <h1 className="uk-heading-small" style={{ fontSize: '1.8rem', lineHeight: '1.3' }}>We contribute open source technical solutions and learning tutorials for developers to learn.
</h1>
            <p className="uk-text-default" style={{ fontSize: '1rem', marginTop: '15px' }}>
    Please check us out on{' '}
    <a 
      href="https://github.com/devgroves" 
      target="_blank" 
      rel="noopener noreferrer"
      className="uk-link-text" 
      style={{ color: '#1e87f0' }}
    >
      GitHub link
    </a>
  </p>
            </div>
          </div>
        </div>
      </div>
        <div className="uk-divider-icon"></div>
    </section>
  );
};

export default Team;