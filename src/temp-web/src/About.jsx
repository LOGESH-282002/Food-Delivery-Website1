import React from 'react';
import Header from './Header';
import './About.css';
import AboutExperienceSection from './AboutExperienceSection';
import FeatureItem from './FeatureItem';
import PromoSection from './PromoSection';
import ChefsSection from './ChefsSection';
import StarRating from './StarRating';
import HeroSection from './HeroSection';
import Footer from './Footer';
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
      <AboutExperienceSection />
      <FeatureItem />
      <PromoSection />
      <ChefsSection />
      <StarRating />
      <HeroSection/>
      <Footer/>
    </>
  );
};
const AboutPageHeader = () => {
  const pageTitle = 'About us.';
  const breadcrumbData = [
    { name: 'Home', link: '/' },
    { name: 'About us', link: null },
  ];

  return <BreadcrumbHeader title={pageTitle} crumbs={breadcrumbData} />;
};

export default AboutPageHeader;
