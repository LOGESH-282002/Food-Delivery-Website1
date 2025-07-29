import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem('favorites');
      if (savedFavorites) {
        const parsed = JSON.parse(savedFavorites);
        // This check ensures you always start with an array
        return Array.isArray(parsed) ? parsed : [];
      }
    } catch (error) {
      console.error("Failed to parse favorites from localStorage", error);
    }
    // Default to an empty array if anything goes wrong
    return [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (restaurant) => {
    setFavorites((prev) => [...prev, restaurant]);
    toast.success(`${restaurant.name} added to favorites!`);
  };

  const removeFromFavorites = (restaurantId) => {
    const restaurant = favorites.find(fav => fav.id === restaurantId);
    setFavorites((prev) => prev.filter((item) => item.id !== restaurantId));
    if (restaurant) {
      toast.info(`${restaurant.name} removed from favorites.`);
    }
  };

  const isFavorite = (restaurantId) => {
    return favorites.some((item) => item.id === restaurantId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};