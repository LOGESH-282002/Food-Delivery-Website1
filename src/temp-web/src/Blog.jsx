import React from 'react';
import './Blog.css';
import Header from './Header';
import LatestPublications from './LatestPublications';
import MostPopularDishes from './MostPopularDishes';
import Footer from './Footer';

const BlogHeader = () => {
  return (
    <>
      <Header />
      <header className="header-container11">
        <h1 className="title">Our Blog</h1>
        <div className="breadcrumb-container">
          <a href="/" className="home-link">
            Home
          </a>
          <span className="breadcrumb-separator"> / </span>
          <span className="current-page">Blog</span>
        </div>
      </header>
      <LatestPublications/>
      <MostPopularDishes />
      <Footer />
    </>
  );
};

export default BlogHeader;