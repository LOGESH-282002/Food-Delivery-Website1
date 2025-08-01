import React from 'react';
import './ShopCat.css';
const StartersIcon = () => (
  <img className='img29' src="./29.png" />
);

const MainDishesIcon = () => (
  <img className='img29' src="./28.png" />
);

const DrinksIcon = () => (
  <img className='img29' src="./30.png" />
);

const DessertsIcon = () => (
  <img className='img29' src="./34.png" />
);
const CategoryCard = ({ icon, title, description }) => {
  return (
    <div className="category-card">
      <div className="category-icon-container">
        {icon}
      </div>
      <div className="category-text-content">
        <h3 className="category-title">{title}</h3>
        <p className="category-description">{description}</p>
      </div>
    </div>
  );
};

const MenuCategories = () => {
  const categories = [
    { id: 1, icon: <StartersIcon />, title: 'Starters', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
    { id: 2, icon: <MainDishesIcon />, title: 'Main dishes', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
    { id: 3, icon: <DrinksIcon />, title: 'Drinks', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
    { id: 4, icon: <DessertsIcon />, title: 'Desserts', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.' },
  ];

  return (
    <>
      <section className="categories-section">
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              icon={category.icon}
              title={category.title}
              description={category.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};
export default MenuCategories;
