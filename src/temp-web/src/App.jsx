import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Menu from './Menu.jsx';
import Shop from './Shop.jsx';
import Contact from './Contact.jsx';
import Blog from './Blog.jsx';

const sampleProduct = {
  id: 1,
  name: "Saumon Gravlax",
  price: 19,
  imageUrl: "/placeholder.svg?height=600&width=600",
  isVegan: true,
  rating: 4,
  ratingCount: 4,
  description: "Tomatoes, nori, feta cheese, mushrooms, rice noodles, corn, shrimp."
};

const handleAddToCart = (product, quantity) => {
  console.log(`Added ${quantity} of ${product.name} to cart.`);
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ProductDetail product={sampleProduct} onAddToCart={handleAddToCart} />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />
        <Route
          path="/shop"
          element={<Shop />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/blog"
          element={<Blog />}
        />
      </Routes>
    </Router>
  )
}

export default App;