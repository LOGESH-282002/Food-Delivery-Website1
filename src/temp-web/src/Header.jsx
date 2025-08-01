import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Menu } from "lucide-react"
import './ProductDetail.css'

export default function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMenuClick = () => {
    if (window.innerWidth < 769) {
      setShowMobileNav((prev) => !prev);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-container">
            <img src="/logo.svg" alt="Company Logo" />
          </div>

          <nav className={`nav${showMobileNav ? ' nav-mobile-show' : ''}`}>
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">Pages</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          <div className="header-actions">
            <div className="cart-wrapper">
              <ShoppingCart className="cart-icon" />
              <span className="cart-badge">3</span>
            </div>
            <Menu className="menu-icon" onClick={handleMenuClick} />
          </div>
        </div>
      </div>
    </header>
  )
}
