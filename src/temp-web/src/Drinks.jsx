import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PiPlantFill } from 'react-icons/pi';
import './StarterMenu.css';
const StarRating = ({ rating, reviewCount }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FaStar key={i} color={i < rating ? '#FACC15' : '#E5E7EB'} />
  ));
  return (
    <div className="star-rating">
      {stars}
      <span className="review-count">({reviewCount} ratings)</span>
    </div>
  );
};
const MenuItemCard = ({ item }) => {
  return (
    <div className="menu-item-card">
      <div className="item-image-container">
        <img src={item.image} alt={item.name} className="item-image" />
        {item.isVegan && (
          <div className="item-tag">
            <PiPlantFill /> Vegan
          </div>
        )}
      </div>
      <div className="item-details">
        <div className="item-header">
          <h3 className="item-name">{item.name}</h3>
          <span className="item-price">${item.price}</span>
        </div>
        <p className="item-description">{item.description}</p>
        <StarRating rating={item.rating} reviewCount={item.reviewCount} />
      </div>
    </div>
  );
};

const StartersMenuSection = () => {
  const menuItems = [
    { id: 1, name: 'Chevrefrit au miel', price: 14, description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', rating: 5, reviewCount: 5, isVegan: false, image: './15.jpg' },
    { id: 2, name: 'Saumon Gravlax', price: 9, description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', rating: 5, reviewCount: 5, isVegan: false, image: './4.jpg' },
    { id: 3, name: 'Carpaccio de...', price: 14, description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', rating: 4, reviewCount: 2, isVegan: false, image: './66.jpg' },
    { id: 4, name: 'Stracciatella', price: 11, description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', rating: 3, reviewCount: 3, isVegan: false, image: './101.jpg' },
    { id: 5, name: 'Carpaccio de...', price: 6, description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', rating: 5, reviewCount: 5, isVegan: true, image: './14.jpg' },
    { id: 6, name: 'Chevrefrit au miel', price: 14, description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', rating: 5, reviewCount: 5, isVegan: false, image: './15.jpg' },
    { id: 7, name: 'Stracciatella', price: 11, description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', rating: 5, reviewCount: 5, isVegan: false, image: './4.jpg' },
    { id: 8, name: 'Carpaccio de...', price: 6, description: 'tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.', rating: 5, reviewCount: 5, isVegan: true, image: './66.jpg' },
  ];

  return (
    <>
      <section className="menu-section">
        <div className="menu-container">
          <header className="menu-section-header">
            <h2>Drinks</h2>
            <p>Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
          </header>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};


export default StartersMenuSection;
