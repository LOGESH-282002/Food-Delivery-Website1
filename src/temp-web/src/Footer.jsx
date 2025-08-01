import React from 'react';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="logo.svg" />
        </div>
        <div className="social-media-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube size={20} />
          </a>
        </div>
        <div className="copyright-info">
          <p>© 2024 Starbelly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
