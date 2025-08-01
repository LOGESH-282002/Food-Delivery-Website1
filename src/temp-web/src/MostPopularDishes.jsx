import React from 'react';
import { FaArrowLeft, FaArrowRight, FaUtensils, FaStar } from 'react-icons/fa';
import { PiForkKnifeFill, PiPlantFill, PiFireSimpleFill } from "react-icons/pi";
import './MostPopularDishes.css';
const DishCard = ({ dish }) => {
  const getTagDetails = (tag) => {
    switch (tag?.toLowerCase()) {
      case 'vegan':
        return {
          className: 'tag-vegan',
          icon: <PiPlantFill />,
          text: 'Vegan'
        };
      case 'hot':
        return {
          className: 'tag-hot',
          icon: <PiFireSimpleFill />,
          text: 'Hot'
        };
      default:
        return null;
    }
  };

  const tagDetails = getTagDetails(dish.tag);

  return (
    <div className="dish-card">
      <div className="dish-image-container">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        {tagDetails && (
          <div className={`dish-tag ${tagDetails.className}`}>
            {tagDetails.icon} {tagDetails.text}
          </div>
        )}
      </div>
      <div className="dish-info">
        <div className="dish-header">
          <h3 className="dish-name">{dish.name}</h3>
          <span className="dish-price">${dish.price}</span>
        </div>
        <p className="dish-description">{dish.description}</p>
        <div className="dish-rating">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          <span className="review-count">({dish.reviewCount} ratings)</span>
        </div>
      </div>
    </div>
  );
};

const MostPopularDishes = () => {
  const popularDishes = [
    {
      id: 1,
      name: 'Carpaccio de...',
      price: 14,
      description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.',
      rating: 5,
      reviewCount: 5,
      image: './11.jpg',
      tag: null,
    },
    {
      id: 2,
      name: 'Chevrefrit au miel',
      price: 14,
      description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.',
      rating: 5,
      reviewCount: 5,
      image: './22.jpg',
      tag: null,
    },
    {
      id: 3,
      name: 'Saumon Gravlax',
      price: 9,
      description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.',
      rating: 5,
      reviewCount: 5,
      image: './33.jpg',
      tag: 'Vegan',
    },
    {
      id: 4,
      name: 'Croustillant de...',
      price: 4,
      description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.',
      rating: 5,
      reviewCount: 5,
      image: './44.jpg',
      tag: 'Hot',
    },
  ];

  return (
    <section className="popular-dishes-section">
      <div className="popular-dishes-container">
        <header className="section-header">
          <div className="header-text">
            <h2>Most popular dishes</h2>
            <p>Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
          </div>
          <div className="header-nav">
            <button className="nav-arrow" aria-label="Previous dish">
              <FaArrowLeft />
            </button>
            <button className="nav-arrow" aria-label="Next dish">
              <FaArrowRight />
            </button>
            <button className="full-menu-btn">
              <PiForkKnifeFill /> Full menu
            </button>
          </div>
        </header>

        <div className="dishes-grid">
          {popularDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopularDishes;