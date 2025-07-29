import './Home.css';
import { useEffect, useState } from 'react';
import { useCart } from './CartContext.jsx';
import { useFavorites } from './FavoritesContext.jsx';
import { toast } from 'react-toastify';
import Header from './Header.jsx';
import RestaurantPopup from './RestaurantPopup.jsx'; 
import './RestaurantPopup.css'; 

const SWIGGY_API_URL = '/api/dapi/restaurants/list/v5?lat=11.9415915&lng=79.8083133&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

function Home() {
  const [masterRestaurantList, setMasterRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [swiggyCategories, setSwiggyCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const { cartItems, addToCart, decrementQuantity } = useCart();

  const [mealLikes, setMealLikes] = useState({});
  const [mealDislikes, setMealDislikes] = useState({});
  const [userReactions, setUserReactions] = useState({});

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    async function fetchSwiggyData() {
      setIsLoading(true);
      try {
        const res = await fetch(SWIGGY_API_URL);
        const data = await res.json();
        const allCards = data?.data?.cards || [];
        const categoryCard = allCards.find(
          (c) => c?.card?.card?.id === "whats_on_your_mind"
        );
        
        let categoriesData = [];
        if (categoryCard) {
            categoriesData = categoryCard?.card?.card?.gridElements?.infoWithStyle?.info || [];
        }
        const categoriesToRemove = [
            "Appam", "Pongal", "Poori", "Parotta", "Khichdi", "Omelette",
            "Samosa", "Pakoda", "Pancakes", "Noodles", "Paniyaram", "Bonda"
        ];
        const filteredCategories = categoriesData.filter(
            cat => !categoriesToRemove.includes(cat.action.text)
        );
        
        setSwiggyCategories(filteredCategories);

        let restaurantsData = [];
        for (const card of allCards) {
          const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (restaurants?.length > 0) {
            restaurantsData = restaurants.map(r => r.info);
            break;
          }
        }
        setMasterRestaurantList(restaurantsData);
        setFilteredRestaurants(restaurantsData);
      } catch (err) {
        console.error("Failed to fetch Swiggy data:", err);
        toast.error("Could not fetch restaurant data.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchSwiggyData();
  }, []);

  useEffect(() => {
    async function filterAndSetRestaurants() {
      setIsLoading(true);
      try {
        let restaurants = [];
        if (selectedCategory) {
          const params = new URLSearchParams(selectedCategory.entityId.split('?')[1]);
          const collectionId = params.get('collection_id');
          const tags = params.get('tags');
          const CATEGORY_API_URL = `/api/dapi/restaurants/list/v5?lat=11.9415915&lng=79.8083133&collection=${collectionId}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
          const res = await fetch(CATEGORY_API_URL);
          const data = await res.json();
          restaurants = data?.data?.cards?.map(c => c.card?.card?.info).filter(Boolean) || [];
        } else {
          restaurants = masterRestaurantList;
        }
        const filtered = restaurants.filter(restaurant =>
          restaurant.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
        setFilteredRestaurants(filtered);
      } catch (err) {
        toast.error('Could not fetch restaurant data.');
      } finally {
        setIsLoading(false);
      }
    }
    filterAndSetRestaurants();
  }, [selectedCategory, debouncedSearchTerm, masterRestaurantList]);

  const handleCategoryClick = (category) => {
    if (selectedCategory?.id === category.id) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  
  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    if (newSearchTerm.trim() !== '') {
      setSelectedCategory(null); 
    }
  };

  const handleLike = (itemId) => {
  };

  const handleDislike = (itemId) => {
  };

  const handleAddToCart = (restaurant) => {
    const item = restaurant.idMeal ? restaurant : {
      idMeal: restaurant.id,
      strMeal: restaurant.name,
      strMealThumb: `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${restaurant.cloudinaryImageId}`,
      price: parseFloat(restaurant.costForTwo?.replace(/[₹, for two]/g, '')) || 250
    };
    
    addToCart(item);
    
    const isInCart = cartItems.some(ci => ci.idMeal === item.idMeal);
    if (!isInCart) {
        toast.success(`${item.strMeal} added to cart!`);
    }
  };

  const handleFavorite = (restaurant) => {
    if (isFavorite(restaurant.id)) {
      removeFromFavorites(restaurant.id);
    } else {
      addToFavorites(restaurant);
    }
  };

  const handleCardClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleClosePopup = () => {
    setSelectedRestaurant(null);
  };

  const handleActionClick = (e, callback) => {
    e.stopPropagation();
    callback();
  };

  return (
    <div className="main responsive-main">
      <Header
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        swiggyCategories={swiggyCategories}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <div className="meals-section responsive-meals-section">
        {isLoading ? (
          <p>Finding restaurants for you...</p>
        ) : filteredRestaurants.length === 0 ? (
          <p>No restaurants found. Try another category or search term!</p>
        ) : (
          <div className="meals-grid responsive-meals-grid">
            {filteredRestaurants.map(rest => {
              const cartItem = cartItems.find(item => item.idMeal === rest.id);
              const quantity = cartItem ? cartItem.quantity : 0;
              const isFav = isFavorite(rest.id);

              return (
                <div className="meal-card responsive-meal-card" key={rest.id} onClick={() => handleCardClick(rest)}>
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${rest.cloudinaryImageId}`}
                    alt={rest.name}
                    className="meal-thumb responsive-meal-thumb"
                  />
                  <h3>{rest.name}</h3>
                  <p className="meal-category responsive-meal-category">{rest.locality}</p>
                  <p style={{ fontSize: '0.9rem', color: '#888' }}>{rest.areaName}</p>
                  <p style={{ fontSize: '0.9rem', color: '#222' }}>⭐ {rest.avgRating || 'N/A'}</p>
                  <p style={{ fontSize: '0.9rem', color: '#555', fontWeight: 'bold' }}>
                    {rest.costForTwo || 'Price not available'}
                  </p>

                  <div className="meal-actions">
                    <button
                      className={`favorite-btn${isFav ? ' favorited' : ''}`}
                      onClick={(e) => handleActionClick(e, () => handleFavorite(rest))}
                      title={isFav ? 'Remove from favorites' : 'Add to favorites'}
                      style={{ fontSize: '1.2rem', color: isFav ? 'red' : '#aaa', background: 'none', border: 'none', cursor: 'pointer', marginRight: '8px' }}
                    >
                      {isFav ? '❤️' : '🤍'}
                    </button>
                    <button
                      className={`reaction-btn ${userReactions[rest.id] === 'like' ? 'active' : ''}`}
                      onClick={(e) => handleActionClick(e, () => handleLike(rest.id))}
                    >
                      👍 {mealLikes[rest.id] || 0}
                    </button>
                    <button
                      className={`reaction-btn ${userReactions[rest.id] === 'dislike' ? 'active' : ''}`}
                      onClick={(e) => handleActionClick(e, () => handleDislike(rest.id))}
                    >
                      👎 {mealDislikes[rest.id] || 0}
                    </button>
                    <div className="add-to-cart-container" onClick={(e) => e.stopPropagation()}>
                      {quantity > 0 ? (
                        <div className="quantity-control">
                          <button onClick={() => decrementQuantity(cartItem.idMeal)}>-</button>
                          <span>{quantity}</span>
                          <button onClick={() => handleAddToCart(rest)}>+</button>
                        </div>
                      ) : (
                        <button className="add-btn" onClick={() => handleAddToCart(rest)}>
                          ADD
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedRestaurant && (
        <RestaurantPopup 
          restaurant={selectedRestaurant} 
          onClose={handleClosePopup}
          onAddToCart={handleAddToCart}
          onDecrement={decrementQuantity}
          cartItems={cartItems}
        />
      )}
    </div>
  );
}

export default Home;