import React from 'react';
import './Menu.css';
import Header from './Header';
import StarterMenu from './StarterMenu.jsx';
import MainDishes from './MainDishes.jsx';
import Drinks from './Drinks.jsx';
import Dessert from './Dessert.jsx';
import PromoCard from './PromoCard.jsx';
import Footer from './Footer.jsx';

const BreadcrumbHeader = ({ title, crumbs }) => {
  return (
    <>
    <Header />
      <header className="breadcrumb-header-container">
        <div className="breadcrumb-header-content">
          <h1 className="header-title">{title}</h1>
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            {crumbs.map((crumb, index) => (
              <span key={index} className="breadcrumb-item">
                {index > 0 && <span className="breadcrumb-separator">/</span>}
                {crumb.link ? (
                  <a href={crumb.link} className="breadcrumb-link">
                    {crumb.name}
                  </a>
                ) : (
                  <span className="breadcrumb-current">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </header>
      <StarterMenu />
      <MainDishes />
      <Drinks/>
      <Dessert />
      <PromoCard/>
      <Footer />
    </>
  );
};
const MenuPageHeader = () => {
  const pageTitle = 'Starbelly menu.';
  const breadcrumbData = [
    { name: 'Home', link: '/' },
    { name: 'Menu', link: null },
  ];

  return <BreadcrumbHeader title={pageTitle} crumbs={breadcrumbData} />;
};

export default MenuPageHeader;
