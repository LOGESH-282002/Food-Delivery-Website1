import React from 'react';
import { FaBehance, FaTwitter, FaGithub, FaArrowRight } from 'react-icons/fa';
import './ChefsSection.css';
const ChefCard = ({ imageSrc, name, role, socialLinks }) => {
  return (
    <div className="chef-card">
      <div className="chef-image-container">
        <img src={imageSrc} alt={name} className="chef-image" />
      </div>
      <div className="chef-info">
        <h3 className="chef-name">{name}</h3>
        <p className="chef-role">{role}</p>
        <div className="chef-socials">
          <a href={socialLinks.behance} aria-label="Behance" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
          <a href={socialLinks.twitter} aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href={socialLinks.github} aria-label="Github" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
};
const ChefsSection = () => {
  const chefs = [
    {
      id: 1,
      name: 'Paul Trueman',
      role: 'Chef',
      imageSrc: './24.png',
      socialLinks: { behance: '#', twitter: '#', github: '#' },
    },
    {
      id: 2,
      name: 'Emma Newman',
      role: 'Assistant chef',
      imageSrc: './25.png',
      socialLinks: { behance: '#', twitter: '#', github: '#' },
    },
    {
      id: 3,
      name: 'Oscar Oldman',
      role: 'Chef',
      imageSrc: './26.png',
      socialLinks: { behance: '#', twitter: '#', github: '#' },
    },
    {
      id: 4,
      name: 'Ed Freeman',
      role: 'Assistant chef',
      imageSrc: './27.png',
      socialLinks: { behance: '#', twitter: '#', github: '#' },
    },
  ];

  return (
    <section className="chefs-section">
      <div className="chefs-container">
        <header className="chefs-header">
          <div className="header-content1">
            <h2 className="section-title">They will cook for you</h2>
            <p className="section-subtitle">
              Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
            </p>
          </div>
          <a href="/about" className="more-about-btn">
            <FaArrowRight /> More about us
          </a>
        </header>

        <div className="chefs-grid">
          {chefs.map((chef) => (
            <ChefCard
              key={chef.id}
              imageSrc={chef.imageSrc}
              name={chef.name}
              role={chef.role}
              socialLinks={chef.socialLinks}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;

