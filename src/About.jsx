import React from 'react';
import './About.css';
import Header from './Header';

function About() {
  return (
    <div className='main'>
      <Header /> 
      
      <div className="about-container">
        <div className="about-hero">
          <h1>About YumCart</h1>
          <p className="about-subtitle">Your favorite food, delivered right to your door.</p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            At YumCart, our mission is simple: to connect people with the best local restaurants and bring delicious food to their homes and offices. We believe that a good meal can bring joy and comfort, and we're dedicated to making that experience as seamless and enjoyable as possible.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>
              <strong>Vast Selection:</strong> Explore a diverse range of cuisines from hundreds of local restaurants.
            </li>
            <li>
              <strong>Fast & Reliable Delivery:</strong> Our dedicated delivery partners ensure your food arrives hot and fresh.
            </li>
            <li>
              <strong>Easy Ordering:</strong> Our user-friendly website and app make finding and ordering your next meal a breeze.
            </li>
            <li>
              <strong>Exceptional Support:</strong> Have an issue? Our customer support team is always here to help.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or just want to say hello? Reach out to us at <a href="mailto:support@yumcart.com">support@yumcart.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;