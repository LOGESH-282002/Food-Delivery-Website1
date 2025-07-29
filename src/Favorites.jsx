import React, { useState, useEffect } from 'react';
import { useFavorites } from './FavoritesContext.jsx';
import Header from './Header.jsx';
import './Home.css';

function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [filteredFavorites, setFilteredFavorites] = useState([]);

  useEffect(() => {
    // Debounce the search term to avoid filtering on every keystroke
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    // Filter favorites whenever the main list or search term changes
    if (debouncedSearchTerm.trim() === '') {
      setFilteredFavorites(favorites);
    } else {
      const filtered = favorites.filter(rest =>
        rest.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredFavorites(filtered);
    }
  }, [favorites, debouncedSearchTerm]);

  return (
    <div className="main responsive-main">
      <Header
        searchTerm={searchTerm}
        onSearchChange={e => setSearchTerm(e.target.value)}
      />
      <div className="meals-section responsive-meals-section">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Your Favorite Restaurants</h2>
        
        {favorites.length === 0 ? (
          <p style={{ textAlign: 'center' }}>You haven't added any favorites yet! ❤️</p>
        ) : filteredFavorites.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No favorite restaurants match your search.</p>
        ) : (
          <div className="meals-grid responsive-meals-grid">
            {filteredFavorites.map(rest => (
              <div className="meal-card responsive-meal-card" key={rest.id}>
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_200,c_fill/${rest.cloudinaryImageId}`}
                  alt={rest.name}
                  className="meal-thumb responsive-meal-thumb"
                />
                <h3>{rest.name}</h3>
                <p className="meal-category responsive-meal-category">{rest.locality}</p>
                <p style={{ fontSize: '0.9rem', color: '#222' }}>⭐ {rest.avgRating || 'N/A'}</p>
                
                <button 
                  onClick={() => removeFromFavorites(rest.id)}
                  style={{
                    marginTop: '10px',
                    padding: '8px 16px',
                    width: '100%',
                    border: '1px solid #ff6347',
                    background: 'transparent',
                    color: '#ff6347',
                    cursor: 'pointer',
                    borderRadius: '50px',
                    fontWeight: 'bold'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;