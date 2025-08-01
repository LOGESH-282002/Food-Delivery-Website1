import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import './PromoCard.css';
const PromoCard = ({ promo }) => {
  return (
    <div className="promo-card">
      <div className="card-content">
        <h2 className="promo-title">
          <span className="promo-highlight">{promo.highlight}</span>
          {promo.title}
        </h2>
        <p className="promo-subtitle">{promo.subtitle}</p>
        <button className="promo-button">
          <FaRegClock /> Get it now
        </button>
      </div>
      <div className="card-image-container">
        <img
          src={promo.image}
          alt={promo.title}
          className={`promo-image${promo.image.includes('cup.png') ? ' promo-cup-image' : ''}`}
        />
      </div>
      <div className="deco-circle-sm promo-deco-sm"></div>
      <div className="deco-circle-lg promo-deco-lg"></div>
    </div>
  );
};
const PromoSection = () => {
  const promoData = [
    {
      id: 1,
      highlight: '-50%',
      title: 'Discount for all* burgers!',
      subtitle: '*Et modi itaque praesentium.',
      image: './burger.png',
    },
    {
      id: 2,
      highlight: 'For free!',
      title: 'Visit Starbelly and get your coffee*',
      subtitle: '*Et modi itaque praesentium.',
      image: './cup.png',
    },
  ];

  return (
    <>
      <section className="promo-section-container">
        <div className="promo-grid">
          {promoData.map((promo) => (
            <PromoCard key={promo.id} promo={promo} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PromoSection;
