import React, { useState, useRef, useEffect } from "react"
import { ArrowLeft, ArrowRight, ShoppingBag, Eye } from "lucide-react"
import "./RelatedProducts.css"

const relatedProductsData = [
  {
    id: 1,
    name: "Chevrefuit au miel",
    price: 14,
    imageUrl: "/11.jpg",
    ingredients: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
    isVegan: false,
  },
  {
    id: 2,
    name: "Saumon Gravlax",
    price: 9,
    imageUrl: "/22.jpg",
    ingredients: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
    isVegan: true,
  },
  {
    id: 3,
    name: "Carpaccio de...",
    price: 14,
    imageUrl: "/33.jpg",
    ingredients: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
    isVegan: false,
  },
  {
    id: 4,
    name: "Stracciatella",
    price: 11,
    imageUrl: "/44.jpg",
    ingredients: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
    isVegan: false,
  },
  {
    id: 5,
    name: "Stracciatella",
    price: 11,
    imageUrl: "/55.jpg",
    ingredients: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
    isVegan: false,
  },
  {
    id: 6,
    name: "Stracciatella",
    price: 11,
    imageUrl: "/66.jpg",
    ingredients: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
    isVegan: false,
  },
  {
    id: 7,
    name: "Stracciatella",
    price: 11,
    imageUrl: "/77.jpg",
    ingredients: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
    isVegan: false,
  },
  {
    id: 8,
    name: "Stracciatella",
    price: 11,
    imageUrl: "/88.jpg",
    ingredients: "tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp.",
    isVegan: false,
  },
]

export default function RelatedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)
  const cardsToShow = 4;
  const handleNext = () => {
    if (currentIndex < relatedProductsData.length - cardsToShow) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }
  useEffect(() => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.children[0]
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth;
        const cardMarginRight = parseInt(window.getComputedStyle(firstCard).marginRight);
        const totalCardWidth = cardWidth + cardMarginRight;
        const newScrollLeft = currentIndex * totalCardWidth;
        scrollContainerRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  return (
    <section className="related-products-section">
      <div className="related-products-header">
        <div className="header-text">
          <h2>Most popular dishes</h2>
          <p>Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
        </div>
        <div className="nav-arrows">
          <button className="arrow-btn" onClick={handlePrev} disabled={currentIndex === 0}>
            <ArrowLeft size={20} />
          </button>
          <button className="arrow-btn" onClick={handleNext} disabled={currentIndex >= relatedProductsData.length - cardsToShow}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="products-carousel-wrapper">
        <div ref={scrollContainerRef} className="products-container">
          {relatedProductsData.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-card-img"
                />
                {product.isVegan && <div className="vegan-tag">Vegan</div>}
              </div>
              <div className="product-card-body">
                <div className="card-header">
                  <h3>{product.name}</h3>
                  <div className="price-tag">${product.price}</div>
                </div>
                <p className="ingredients-text">{product.ingredients}</p>
                <div className="card-actions">
                  <button className="icon-btn">
                    <img src="/arrow.svg" alt="details" />
                  </button>
                  <button className="card-add-to-cart-btn">
                    <ShoppingBag size={18} />
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}