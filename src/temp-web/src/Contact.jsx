import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';
import Header from './Header';  
import Location from './Location.jsx';
import Footer from './Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
        <Header />
      <section className="contact-section">
        <div className="contact-container">
          <div className="info-column">
            <span className="contact-tag">Contact</span>
            <h1 className="main-heading">
              Get in Touch with <br /> Starbelly
            </h1>
            <p className="description">
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
            </p>
            <nav className="breadcrumb-nav">
              <a href="/">Home</a>
              <span className="separator">/</span>
              <span>Contact</span>
            </nav>
            <img 
              src="./32.png" 
              alt="Envelope" 
              className="deco-envelope"
            />
          </div>
          <div className='contact-image-column'>
          <div className="form-column">
            <div className="form-wrapper">
              <h2 className="form-title">Send Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" style={{
                    textAlign: 'left', fontWeight:'bold'
                  }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" style={{
                    textAlign: 'left', fontWeight:'bold'
                  }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" style={{
                    textAlign: 'left', fontWeight:'bold'
                  }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <p className="privacy-note">
                  *We promise not to disclose your personal information to third parties.
                </p>
                <button type="submit" className="submit-button">
                  <FaPaperPlane /> Send
                </button>
              </form>
            </div>
             <img 
                src="./31.png" 
                alt="Wax seal stamp" 
                className="deco-stamp"
            />
          </div>
          </div>
        </div>
        <div className="deco-dot dot-1"></div>
        <div className="deco-dot dot-2"></div>
        <div className="deco-circle circle-1"></div>
      </section>
      <Location />
      <Footer />
    </>
  );
};

export default ContactPage;
