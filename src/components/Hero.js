import React from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
const Hero = () => {
  const { width } = useWindowSize();
  return (
    
    <section id="hero" className="uk-section"style={{ paddingTop: '40px' }} > 
      <div className="uk-container">
        <div 
          className="uk-flex uk-flex-between uk-flex-middle" 
         uk-grid="true"
          uk-margin-medium-top="true"
          style={{
            flexDirection: width >= 960 ? 'row' : 'column'
          }}
        >
          
          <div className="uk-width-1-2@m uk-width-1-1">
            <div className="uk-text-center">
              <img 
                src="https://devgrovestechnologies.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.79c1bc2f.png&w=1200&q=75" 
                alt="DevGroves Technologies"
                className="uk-border-rounded uk-box-shadow-medium"
                style={{ 
                  maxWidth: '100%',
                 objectFit: 'contain',
                  maxHeight: '350px'
                }}
              />
            </div>
          </div>
          <div className="uk-width-1-2@m uk-width-1-1" uk-margin-medium-top="true">
            <div>
              <h1 className="uk-heading-small" style={{ fontSize: '1.8rem', lineHeight: '1.3' }}>DevGroves is a  dev community synergized to build performance efficient technical solutions.</h1>
               <p className="uk-text-default" style={{ fontSize: '1rem', marginTop: '15px' }}>
                We work for consultancies, organizations and freelancers to build web applications, 
                REST APIs and chat bots.
              </p>
              <p className="uk-text-default" style={{ fontSize: '1rem', marginTop: '10px' }}>
                Developers working from reputed software companies connected together to provide 
                solutions by technically rational approach.
              </p>
              <p className="uk-text-default" style={{ fontSize: '1rem', marginTop: '10px' }}>
                As we have senior dev peoples, we can work on technically intensive code development. Also make the cross platform desktop and mobile solutions using web technologies.
              </p>
            
            
            </div>
          </div>
        </div>
      </div>
        <div className="uk-divider-icon"></div>
    </section>
    
  );
};

export default Hero;