import React from 'react';
import './FeatureItem.css';
const FeatureItem = ({ number, title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-number-container">
        <svg className="feature-number-svg" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="30" stroke="#FACC15" strokeWidth="4" fill="none" />
          <circle cx="40" cy="40" r="38" stroke="#FACC15" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        </svg>
        <span className="feature-number-text">{number}</span>
      </div>
      <div className="feature-text-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </div>
  );
};
const FeaturesSection = () => {
  const featuresData = [
    {
      number: '01',
      title: 'We are located in the city center',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
    {
      number: '02',
      title: 'Fresh ingredients from organic farms',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
    {
      number: '03',
      title: 'Own fast delivery. 30 min Maximum',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
    {
      number: '04',
      title: 'Professional, experienced chefs',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
    {
      number: '05',
      title: 'The highest standards of service',
      description: 'Porro nemo veniam necessitatibus praesentium eligendi rem temporibus adipisci quo modi numquam.',
    },
  ];

  return (
    <>
      <section className="features-section">
        <div className="features-container">
          {featuresData.map((feature) => (
            <FeatureItem
              key={feature.number}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
