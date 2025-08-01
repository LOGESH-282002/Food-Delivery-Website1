import { useState } from "react"
import { ShoppingCart, Star, Minus, Plus } from "lucide-react"
import IngredientsTab from "./IngredientsTab"
import RelatedProducts from "./RelatedProducts"
import HeroSection from "./HeroSection"
import Footer from "./Footer"
import Header from "./Header"
import './ProductDetail.css'

export default function ProductDetail({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))

  if (!product) {
    return (
      <main className="main-content">
        <div>Loading product...</div>
      </main>
    )
  }

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity)
  }

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="breadcrumb-container1">
          <h1 className="page-title">Product Detail</h1>
          <div className="breadcrumb">
            <span className="breadcrumb-text">Home / Products / Product Detail</span>
          </div>
        </div>
        <div className="product-grid">
          <div className="product-image-wrapper">
            <div className="product-image-container">
              <img src="/4.jpg" alt={product.name} className="product-image" />
              {product.isVegan && (
                <div className="product-tag">
                  <span>🌱 Vegan</span>
                </div>
              )}
            </div>
          </div>
          <div className="product-details">
            <div className="product-header">
              <h2 className="product-name">{product.name}</h2>
              <div className="price-container">
                <span className="price-text">${product.price}</span>
              </div>
            </div>
            <div className="rating-container">
              <div className="stars-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={star <= product.rating ? "star-icon-filled" : "star-icon-empty"}
                  />
                ))}
              </div>
              <span className="rating-text">({product.ratingCount} ratings)</span>
            </div>
            <p className="product-description">{product.description}</p>
            <div className="process-steps">
              {/* Process steps content */}
            </div>
            <div className="actions-container">
              <div className="quantity-selector">
                <button onClick={decrementQuantity} className="quantity-button rounded-l-lg">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="quantity-display">{quantity}</span>
                <button onClick={incrementQuantity} className="quantity-button rounded-r-lg">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="add-to-cart-button" onClick={handleAddToCartClick}>
                <ShoppingCart className="w-5 h-5" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
        <IngredientsTab />
        <RelatedProducts />
        <HeroSection />
        <Footer />
      </main>
    </>
  )
}
