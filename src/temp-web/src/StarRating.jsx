import React from 'react';
import { FaStar, FaArrowLeft, FaArrowRight, FaCommentDots } from 'react-icons/fa';
import './StarRating.css';
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<FaStar key={i} color={i < rating ? '#FACC15' : '#E5E7EB'} />);
  }
  return <div className="star-rating">{stars}</div>;
};
const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h3 className="review-title">{review.title}</h3>
      <StarRating rating={review.rating} />
      <p className="review-text">{review.text}</p>
      <div className="review-author">
        <img src={review.author.avatar} alt={review.author.name} className="author-avatar" />
        <span className="author-name">{review.author.name}</span>
      </div>
    </div>
  );
};
const ReviewsSection = () => {
  const reviewsData = [
    {
      id: 1,
      title: 'Very tasty',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!',
      author: {
        name: 'Emma Newman',
        avatar: 'https://i.pravatar.cc/150?img=1',
      },
    },
    {
      id: 2,
      title: 'I have lunch here every day',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!',
      author: {
        name: 'Paul Trueman',
        avatar: 'https://i.pravatar.cc/150?img=3',
      },
    },
  ];

  return (
    <>
      <section className="reviews-section">
        <div className="reviews-container">
          <header className="reviews-header">
            <div className="header-text">
              <h2 className="section-title">Reviews about us</h2>
              <p className="section-subtitle">
                Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
              </p>
            </div>
            <div className="header-nav">
              <button className="nav-arrow" aria-label="Previous review">
                <FaArrowLeft />
              </button>
              <button className="nav-arrow active" aria-label="Next review">
                <FaArrowRight />
              </button>
              <button className="all-reviews-btn">
                <FaCommentDots /> All reviews
              </button>
            </div>
          </header>

          <div className="reviews-grid">
            {reviewsData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
