import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import './PromoSection.css';

const PromoSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  return (
    <>
      <section className="promo-section">
        <div className="promo-container">
          <div className="text-column">
            <span className="promo-tag">Promo video</span>
            <h2 className="promo-heading">
              Restaurant is like a theater. <br />
              Our task is to amaze you!
            </h2>
            <p className="promo-description">
              Repellat, dolorem a. Qui ipsam quos, obcaecati mollitia consectetur ad per minus neque sit architecto totam distinesserunt pariatur adipisci rem aspernatur illum ex!
            </p>
            <button className="promo-button" onClick={openVideo}>
              <FaPlay className="play-icon" />
              <span>Promo video</span>
            </button>
          </div>
          <div className="image-column">
            <div className="image-wrapper" onClick={openVideo}>
              <img
                src="./i2.jpg"
                alt="Interior of a cozy restaurant"
                className="promo-image1"
              />
              <div className="play-button-overlay">
                <FaPlay />
              </div>
            </div>
          </div>
        </div>

        <div className="deco-shape shape-1"></div>
        <div className="deco-shape shape-2"></div>
        <div className="deco-shape shape-3"></div>
        <div className="deco-shape shape-4"></div>
      </section>

      {isVideoOpen && (
        <div className="video-modal-backdrop" onClick={closeVideo}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-button" onClick={closeVideo}>&times;</button>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/F3zw1Gvn4Mk?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default PromoSection;
