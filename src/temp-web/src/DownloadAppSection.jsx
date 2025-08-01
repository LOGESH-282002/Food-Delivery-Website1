import React from 'react';
import './DownloadAppSection.css';

const googlePlayBadgeUrl = './1.svg';
const appStoreBadgeUrl = './2.svg';
const phoneMockup1Url = './phones.png';

const AppDownloadSection = () => {
  return (
    <section className="download-section-container">
      <div className="deco-pizza"></div>
      <div className="deco-cupcake"></div>
      
      <div className="download-text-content">
        <h1>Download our mobile app.</h1>
        <p>
          Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
        </p>
        <div className="app-store-badges">
          <a href="#googleplay" aria-label="Get it on Google Play">
            <img src={googlePlayBadgeUrl} alt="Get it on Google Play" />
          </a>
          <a href="#appstore" aria-label="Download on the App Store">
            <img src={appStoreBadgeUrl} alt="Download on the App Store" />
          </a>
        </div>
      </div>

      <div className="download-image-content">
        <div className="background-shapes">
          <div className="yellow-circle"></div>
          <div className="white-ring"></div>
        </div>
        <img
          src={phoneMockup1Url}
          alt="App interface on a smartphone showing a food bowl"
          className="phone-mockup phone-1"
        />
      </div>
    </section>
  );
};

export default AppDownloadSection;