// TitleSection.js
import React from 'react';
import { Helmet } from 'react-helmet';

const TitleSection = () => {
  return (
    <>
      <Helmet>
        <title>DevGroves Technologies - Innovative Technical Solutions</title>
        <meta name="description" content="DevGroves is a dev community synergized to build performance efficient technical solutions." />
      </Helmet>
      
      <section className="uk-section uk-section-small uk-background-primary uk-light">
        <div className="uk-container">
          <div className="uk-text-center">
            <h1 className="uk-heading-medium">DevGroves Technologies</h1>
            <p className="uk-text-lead">Innovative Technical Solutions for Modern Businesses</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleSection;