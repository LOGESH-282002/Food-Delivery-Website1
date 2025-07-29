import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    console.log('CartContext: cartItems updated:', cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (meal) => {
    console.log('Adding to cart:', meal);
    setCartItems(prev => {
      const existing = prev.find(item => item.idMeal === meal.idMeal);
      if (existing) {
        console.log('Item already exists, incrementing quantity');
        return prev.map(item =>
          item.idMeal === meal.idMeal
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      console.log('Adding new item to cart');
      return [...prev, { ...meal, quantity: 1 }];
    });
  };

  const removeFromCart = (idMeal) => {
    setCartItems(prev => prev.filter(item => item.idMeal !== idMeal));
  };

  const incrementQuantity = (idMeal) => {
    setCartItems(prev =>
      prev.map(item =>
        item.idMeal === idMeal ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (idMeal) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.idMeal === idMeal ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
} 