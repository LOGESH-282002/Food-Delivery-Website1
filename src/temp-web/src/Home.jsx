import React from 'react';
import './Home.css';
import Header from './Header';
import { FiRefreshCw } from 'react-icons/fi';
import { IoTimeOutline } from 'react-icons/io5';
import { PiBuildings } from 'react-icons/pi';
import ExperienceSection from './ExperienceSection';
import FeatureItem from './FeatureItem';
import MostPopularDishes from './MostPopularDishes';
import ChefsSection from './ChefsSection';
import DownloadAppSection from './DownloadAppSection';
import Footer from './Footer';

const womanEatingImageUrl = './girl.png';

const FoodHeroSection = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="leftColumn">
          <h1 className="heading1">
            We do not cook,<br />
            we create your emotions!
          </h1>
          <p className="paragraph">
            Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>
          <div className="buttonGroup">
            <button className="primaryButton">
              <FiRefreshCw size={20} />
              <span>Our menu</span>
            </button>
            <div className="secondaryButtonWrapper">
              <button className="secondaryButton">
                <IoTimeOutline size={24} />
              </button>
              <span className="secondaryButtonLabel">About us</span>
            </div>
          </div>
        </div>
        <div className="rightColumn">
          <PiBuildings size={40} className="decoIcon faintIcon" />
          {/* <div className="decoIconPlaceholder cupcakeIcon"></div>
          <div className="decoIconPlaceholder burgerIcon"></div>
          <div className="dot yellowDot"></div>
          <div className="dot orangeDot"></div> */}
          <div className="imageWrapper">
            <img src={womanEatingImageUrl} alt="Happy woman with a fork" className="image-girl" />
          </div>
          {/* <div className="largeWhiteCircle"></div> */}
        </div>
      </div>
      <ExperienceSection />
      <FeatureItem />
      <MostPopularDishes />
      <ChefsSection />
      <DownloadAppSection />
      <Footer />
    </>
  );
};

export default FoodHeroSection;