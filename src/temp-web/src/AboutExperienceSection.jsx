import React from 'react';
import './AboutExperienceSection.css';
const AboutExperienceSection = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="image-column">
            <div className="image-wrapper1">
              <img 
                src="./21.jpg"
                alt="Person working in a cafe"
                className="main-image"
              />
              <div className="experience-box">
                <div className="experience-text">
                  <span className="experience-number">17</span>
                  <span className="experience-label">Years Experience</span>
                </div>
              </div>
            </div>
            <div class="deco-shape sh-4" bis_skin_checked="1"></div>
            <div class="deco-shape sh-3" bis_skin_checked="1"></div>
            <div class="deco-shape sh-2" bis_skin_checked="1"></div>
            <div class="deco-shape sh-1" bis_skin_checked="1"></div>
          </div>
          <div className="text-column">
            <h2 className="section-heading">
              We are doing more than you expect
            </h2>
            <p className="section-paragraph">
              Faudantium magnam error temporibus ipsam aliquid neque quibusdam dolorum, quia ea numquam assumenda mollitia dolorem impedit. Voluptate at quis exercitationem officia temporibus adipisci quae totam enim dolorum, assumenda. Sapiente soluta nostrum reprehenderit a velit obcaecati facilis vitae magnam tenetur neque vel itaque inventore eaque explicabo commodi maxime! Aliquam quasi, voluptates odio.
            </p>
            <p className="section-paragraph">
              Consectetur adipisicing elit. Cupiditate nesciunt amet facilis numquam, nam adipisci qui voluptate voluptas enim obcaecati veritatis animi nulla, mollitia commodi quaerat ex, autem ea laborum.
            </p>
            <div className="signature-container">
              <img 
                src="./signature.png" 
                alt="Signature" 
                className="signature-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutExperienceSection;
