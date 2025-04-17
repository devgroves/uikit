import React from 'react';
import { Link } from 'react-scroll';

const Services = () => {
  return (
    <section id="services" className="uk-section"style={{ paddingTop: '40px' }} >
      
      <div className="uk-container">
        <div 
          className="uk-flex uk-flex-between uk-flex-middle" 
          uk-grid
          uk-margin-medium-top
          style={{
            flexDirection: window.innerWidth >= 960 ? 'row' : 'column'
          }}
        >

          <div className="uk-width-1-2@m uk-width-1-1">
            <div className="uk-text-center">
              <img 
                src="https://devgrovestechnologies.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.cc1efe10.png&w=1200&q=75" 
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
          <div className="uk-width-1-2@m uk-width-1-1">
            <div>
              <h1 className="uk-heading-small" style={{ fontSize: '1.8rem', lineHeight: '1.3' }}>Begin the journey, by providing the below services:</h1>
               <p className="uk-text-default" style={{ fontSize: '1rem', marginTop: '15px' }}>
                Build static and dynamic responsive websites. Static sites can be developed using javascript technologies like angular, react or jQuery. Dynamic sites like payroll, CRM, or job portals. 
              </p>
              <p className="uk-text-default" style={{ fontSize: '1rem', marginTop: '10px' }}>
               Enterprise grade REST APIs developed using Java or nodeJs technologies with scalability. We develop distributed architecture of microservices with Elastic Load Balancers.
              </p>
              <p className="uk-text-default" style={{ fontSize: '1rem', marginTop: '10px' }}>
               Write Technical Content Blogs on multiple sites. Technical Blogs will be benchmarking the technologies, doing the POC and exploring the features of the framework.
              </p>
             <p className="uk-text-default" style={{ fontSize: '1rem', marginTop: '10px' }}>
               Create ChatBots for conversational requirements with apis. Also stock alert kind of chat bots.
              </p>
            
            </div>
          </div>
        </div>
      </div>
        <div className="uk-divider-icon"></div>
    </section>
  );
};

export default Services;