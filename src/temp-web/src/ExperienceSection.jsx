import React from 'react';
import './ExperienceSection.css';

const imageUrl = 'i1.jpg'; 

const ExperienceSection = () => {
  return (
    <div className="container">
      <div className="whiteCircleTopLeft"></div>

      <div className="leftColumn">
        <div className="imageContainer">
          <img src={imageUrl} alt="Interior of a modern restaurant" className="image" />
        </div>
        <div className="experienceBox">
          <div className="years">17</div>
          <div className="experienceText">Years<br />Experience</div>
        </div>
        <div className="yellowCircleLeft"></div>
      </div>

      <div className="rightColumn">
        <h2 className="heading">We are doing more than<br />you expect</h2>
        <div className="feature">
          <div className="number">01</div>
          <div>
            <h3 className="featureTitle">We are located in the city center</h3>
            <p className="featureDescription">Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.</p>
          </div>
        </div>
        <div className="feature">
          <div className="number">02</div>
          <div>
            <h3 className="featureTitle">Fresh, organic ingredients</h3>
            <p className="featureDescription">Consectetur numquam porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi.</p>
          </div>
        </div>
        <div className="feature">
          <div className="number">03</div>
          <div>
            <h3 className="featureTitle">Own fast delivery</h3>
            <p className="featureDescription">Necessitatibus praesentium eligendi rem temporibus adipisci quo modi. Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;