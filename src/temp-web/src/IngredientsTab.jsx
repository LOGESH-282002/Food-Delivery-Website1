import React, { useState } from "react";
import "./IngredientsTab.css";

const ingredientsCol1 = [
  { name: "Numquam", quantity: "1 pack" },
  { name: "Cupiditate", quantity: "150g" },
  { name: "Adipisicing", quantity: "500g" },
  { name: "Dolorem obcaecati", quantity: "3 Teaspoon" },
];

const ingredientsCol2 = [
  { name: "Porro", quantity: "2 pack" },
  { name: "Facilis", quantity: "1kg" },
  { name: "Golluptatem", quantity: "1 Teaspoon" },
  { name: "Vel fuga", quantity: "300g" },
];

export default function IngredientsTab() {
  const [activeTab, setActiveTab] = useState("Ingredients");

  const renderContent = () => {
    switch (activeTab) {
      case "Ingredients":
        return (
          <div className="ingredients-grid">
            <div className="ingredients-column">
              {ingredientsCol1.map((item) => (
                <div key={item.name} className="ingredient-item">
                  <span>{item.name}</span>
                  <span className="quantity">{item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="ingredients-column">
              {ingredientsCol2.map((item) => (
                <div key={item.name} className="ingredient-item">
                  <span>{item.name}</span>
                  <span className="quantity">{item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "Product details":
        return <div>
            <p>Facilis ratione veritatis asperiores doloremque molestiae delectus iure officia earum dolores sit fugiat, repellendus, neque laboriosam optio culpa quibusdam, magnam totam quos. Mollitia dolorem, culpa, dignissimos quas et voluptates architecto in sit totam, quae animi ratione adipisci nulla ab quasi perferendis quo pariatur dolor magnam inventore. Sequi nisi ex excepturi non harum, asperiores laboriosam ipsum voluptate doloribus incidunt nam eveniet similique unde esse voluptatem minus necessitatibus eaque temporibus quaerat accusantium amet deserunt. Iste, facilis? Illo tenetur, libero, non dicta asperiores quisquam voluptas natus aperiam, at perspiciatis repellat voluptate. Autem non reprehenderit, perferendis.</p>
            <p>Consectetur adipisicing elit. Delectus quibusdam repellendus nesciunt cumque fugit numquam adipisci voluptatum quam, sapiente doloribus ut eaque natus laudantium alias illum quos maiores, quia perferendis.</p>
        </div>;
      case "Reviews":
        return <div>
                    <div>
                        <p>Very tasty</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                        <img src="/1.jpg"/>
                        <p>Emma Newman</p>
                    </div>
                    <div>
                        <p>I have lunch here every day</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis fugiat totam nobis quas unde excepturi inventore possimus laudantium provident, rem eligendi velit. Aut molestias, ipsa itaque laborum, natus tempora, ut soluta animi ducimus dignissimos deserunt doloribus in reprehenderit rem accusamus! Quibusdam labore, aliquam dolor harum!</p>
                        <img src="/2.jpg"/>
                        <p>Paul Trueman</p>
                    </div>
                </div>;
      default:
        return null;
    }
  };

  return (
    <div className="product-info-container">
      <div className="product-info-tabs">
        <button
          className={`tab-button ${activeTab === "Ingredients" ? "active" : ""}`}
          onClick={() => setActiveTab("Ingredients")}
        >
          Ingredients
        </button>
        <button
          className={`tab-button ${activeTab === "Product details" ? "active" : ""}`}
          onClick={() => setActiveTab("Product details")}
        >
          Product details
        </button>
        <button
          className={`tab-button ${activeTab === "Reviews" ? "active" : ""}`}
          onClick={() => setActiveTab("Reviews")}
        >
          Reviews
        </button>
      </div>
      <div className="product-info-content">{renderContent()}</div>
    </div>
  );
}
