import React from 'react';
import './MenuCategories.css';
import { Utensils, Soup, GlassWater, IceCream } from 'lucide-react';

const categories = [
  {
    icon: <Utensils />,
    title: 'Starters',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: <Soup />,
    title: 'Main dishes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: <GlassWater />,
    title: 'Drinks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
  {
    icon: <IceCream />,
    title: 'Desserts',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
  },
];

const MenuCategories = () => {
  return (
    <section className="container">
      <header className="header">
        <div className="textWrapper">
          <h2 className="heading">What do you like today?</h2>
          <p className="subheading">Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
        </div>
        <button className="button">
          Go shopping now
        </button>
      </header>
      <div className="grid">
        {categories.map((category) => (
          <div key={category.title} className="card">
            <div className="iconWrapper">
              {category.icon}
            </div>
            <h3 className="cardTitle">{category.title}</h3>
            <p className="cardDescription">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategories;