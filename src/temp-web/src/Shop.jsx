import React from 'react';
import './Shop.css';
import Header from './Header';
import ShopCat from './ShopCat.jsx';
import Footer from './Footer.jsx';
import MostPopular from './MostPopular.jsx';
import Bestsellers from './Bestsellers.jsx';
import ChefsSection from './ChefsSection.jsx';
import PromoCard from './PromoCard.jsx';

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
      <ShopCat />
      <MostPopular />
      <Bestsellers />
      <ChefsSection />
      <PromoCard />
      <Footer />
    </>
  );
};
const MenuPageHeader = () => {
  const pageTitle = 'Online Shop';
  const breadcrumbData = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: null },
  ];

  return <BreadcrumbHeader title={pageTitle} crumbs={breadcrumbData} />;
};

export default MenuPageHeader;
