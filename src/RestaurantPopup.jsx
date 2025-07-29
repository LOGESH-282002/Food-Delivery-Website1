import './RestaurantPopup.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    // Changed from <div> to <span> to allow nesting inside a <p> tag
    <span>
      {'★'.repeat(fullStars)}
      {halfStar && '½'}
      {'☆'.repeat(emptyStars)}
      <span style={{ marginLeft: '8px', color: '#555' }}>({rating})</span>
    </span>
  );
};

function RestaurantPopup({ restaurant, onClose, onAddToCart, onDecrement, cartItems }) {
  if (!restaurant) return null;

  const cartItem = cartItems.find(item => item.idMeal === restaurant.id);
  const quantity = cartItem ? cartItem.quantity : 0;
  const handleContentClick = (e) => e.stopPropagation();

  const handleAddToCartClick = () => {
    const itemToAdd = {
      idMeal: restaurant.id,
      strMeal: restaurant.name,
      strMealThumb: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${restaurant.cloudinaryImageId}`,
      price: parseFloat(restaurant.costForTwo?.replace(/[₹, for two]/g, '')) || 250
    };
    onAddToCart(itemToAdd);
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={handleContentClick}>
        <button className="close-btn" onClick={onClose}>×</button>
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400,c_fill/${restaurant.cloudinaryImageId}`}
          alt={restaurant.name}
          className="popup-img"
        />
        <h2>{restaurant.name}</h2>
        <p className="popup-cuisines">{restaurant.cuisines.join(', ')}</p>
        <div className="popup-details">
          <p><strong>Location:</strong> {restaurant.locality}, {restaurant.areaName}</p>
          <p><strong>Rating:</strong> <StarRating rating={restaurant.avgRating} /></p>
          <p><strong>Cost for Two:</strong> {restaurant.costForTwo}</p>
        </div>
        <div className="popup-actions">
          {quantity > 0 ? (
            <div className="quantity-control popup-quantity">
              <button onClick={() => onDecrement(restaurant.id)}>-</button>
              <span>{quantity}</span>
              <button onClick={handleAddToCartClick}>+</button>
            </div>
          ) : (
            <button className="add-btn popup-add-btn" onClick={handleAddToCartClick}>
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default RestaurantPopup;