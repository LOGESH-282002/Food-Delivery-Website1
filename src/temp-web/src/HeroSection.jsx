import React from "react"
import { ShoppingBag, BookOpen } from "lucide-react"
import "./HeroSection.css"

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Free delivery service.</h1>
          <p className="hero-description">
            *Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              <ShoppingBag size={20} />
              <span>Order delivery</span>
            </button>
            <button className="btn btn-secondary">
              <BookOpen size={20} />
              <span>Menu</span>
            </button>
          </div>
        </div>
        <div className="hero-image-container">
        <div className="pad">
          <img
            src="/delivery.png"
            alt="Food delivery packaging"
            className="hero-image"
          />
          <div className="big-circle"></div>
          <div className="medium-circle"></div>
          <div className="small-circle"></div>
          <div className="smaller-circle"></div>
          <div className="abig-circle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}