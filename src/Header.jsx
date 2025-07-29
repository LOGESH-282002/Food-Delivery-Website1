import './Header.css';
import { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext.jsx';

function Header({
  searchTerm = '',
  onSearchChange = () => {},
  swiggyCategories = [],
  selectedCategory = null,
  onCategoryClick = () => {}
}) {
  const [navOpen, setNavOpen] = useState(false);
  const { cartItems } = useCart();
  const categoriesListRef = useRef(null);

  useEffect(() => {
    if (navOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => {
      document.body.classList.remove('body-no-scroll');
    };
  }, [navOpen]);

  const scrollCategories = (direction) => {
    const container = categoriesListRef.current;
    if (!container) return;
    const scrollAmount = 200;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="header responsive-header head">
      <nav className="responsive-nav">
        <a className='logo responsive-logo' href="/">
          <img src="/delivery-man.png" alt="YumCart Logo" />
          <p>YumCart</p>
        </a>
        <ul className={`responsive-nav-list${navOpen ? ' open' : ''}`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/cart">Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</NavLink></li>
          <li><NavLink to="/favorites">Favorites</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
        {onSearchChange !== (() => {}) && (
          <input
            type="text"
            placeholder="Search restaurants..."
            className="responsive-search"
            value={searchTerm}
            onChange={onSearchChange}
          />
        )}
        <button
          className={`hamburger${navOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setNavOpen(open => !open)}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </nav>
      {swiggyCategories.length > 0 && (
        <div className="categories-scroll-wrapper">
          <button className="scroll-arrow left" onClick={() => scrollCategories('left')} aria-label="Scroll categories left">&#8592;</button>
          <div className="categories-list responsive-categories-list" ref={categoriesListRef}>
            {swiggyCategories.map((cat) => (
              <span
                className={`category-item${selectedCategory?.id === cat.id ? ' selected' : ''}`}
                key={cat.id}
                onClick={() => onCategoryClick(cat)}
              >
                <span>{cat.action.text}</span>
              </span>
            ))}
          </div>
          <button className="scroll-arrow right" onClick={() => scrollCategories('right')} aria-label="Scroll categories right">&#8594;</button>
        </div>
      )}
    </div>
  );
}

export default Header;