import React, { useState, useEffect } from 'react';
import Header from './Header.jsx';
import { useCart } from './CartContext.jsx';
import "./Cart.css";

function Cart() {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [filteredCartItems, setFilteredCartItems] = useState([]);

  // Debounce the search term to avoid filtering on every keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  // Filter the items whenever the main list or the search term changes
  useEffect(() => {
    if (debouncedSearchTerm.trim() === '') {
      setFilteredCartItems(cartItems); // If search is empty, show all items
    } else {
      const filtered = cartItems.filter(item =>
        item.strMeal.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredCartItems(filtered);
    }
  }, [cartItems, debouncedSearchTerm]);

  // The total should always be calculated from the original cartItems list
  const total = cartItems.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : parseFloat(item.price?.replace(/[₹, for two]/g, '')) || 0;
    return sum + (item.quantity * price);
  }, 0);

  return (
    <div className="main">
      <Header
        searchTerm={searchTerm}
        onSearchChange={e => setSearchTerm(e.target.value)}
      />
      <div className="main">
        <h2 className="cart-heading">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty. Go add some delicious food!</p>
        ) : filteredCartItems.length === 0 ? (
          <p className="empty-cart">No items in your cart match your search.</p>
        ) : (
          <>
            <ul className="cart-list">
              {filteredCartItems.map(item => (
                <li key={item.idMeal} className="cart-item">
                  <img
                    className='image'
                    src={item.strMealThumb}
                    alt={item.strMeal}
                  />
                  <div className="cart-details">
                    <p className="meal-name">{item.strMeal}</p>
                    <p className="price">Price: Rs {typeof item.price === 'number' ? item.price.toFixed(2) : item.price}</p>
                    <p className="subtotal">Subtotal: Rs {(item.quantity * (typeof item.price === 'number' ? item.price : parseFloat(item.price?.replace(/[₹, for two]/g, '')) || 0)).toFixed(2)}</p>
                  </div>
                  <div className="qty-control">
                    <button className="qty-btn" onClick={() => decrementQuantity(item.idMeal)}>-</button>
                    <span className="qty-value">{item.quantity}</span>
                    <button className="qty-btn increment" onClick={() => incrementQuantity(item.idMeal)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.idMeal)}>Remove</button>
                </li>
              ))}
            </ul>
            <div className="total-amount">Total: Rs {total.toFixed(2)}</div>
            <div className="checkout-btn-container">
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;