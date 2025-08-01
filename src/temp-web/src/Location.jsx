import React from 'react';
import './Location.css';
const ContactInfoItem = ({ number, title, detail }) => {
  return (
    <div className="contact-info-item">
      <div className="contact-number-circle">
        <span>{number}</span>
      </div>
      <div className="contact-text-content">
        <h3 className="contact-title">{title}</h3>
        <p className="contact-detail">{detail}</p>
      </div>
    </div>
  );
};

const ContactMapSection = () => {
  const contactData = [
    {
      number: '01',
      title: 'Welcome',
      detail: 'Montréal, 1510 Rue Sauvé',
    },
    {
      number: '02',
      title: 'Call',
      detail: '+02 (044) 756-X6-52',
    },
    {
      number: '03',
      title: 'Write',
      detail: 'starbelly@mail.com',
    },
  ];

  return (
    <>
      <section className="contact-map-section">
        <div className="contact-info-bar">
          {contactData.map((item) => (
            <ContactInfoItem
              key={item.number}
              number={item.number}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </div>
        <div className="map-container">
          <img
            src="#"
            alt="Map showing the location of the restaurant"
            className="map-image"
            onError={(e) => e.target.src='https://placehold.co/1200x500/'}
          />
        </div>
      </section>
    </>
  );
};

export default ContactMapSection;
