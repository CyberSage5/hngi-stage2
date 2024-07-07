/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // Implement logic to add product to cart
    console.log(`Added ${quantity} ${product.name} to cart`);
  };

  const handleShopNow = () => {
    // Implement logic to proceed directly to checkout or shopping flow
    console.log(`Shop now for ${product.name}`);
  };

  return (
    <div className="product-page">
      <div className="product-images">
        <img src={product.image} alt={product.name} className="main-image" />
        <div className="additional-images">
          {product.additionalImages.map((img, index) => (
            <img key={index} src={img} alt={`${product.name} ${index + 1}`} className="additional-image" />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <div className="quantity-controls">
          <button onClick={handleIncreaseQuantity}>+</button>
          <span>{quantity}</span>
          <button>-</button>
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleShopNow}>Shop Now</button>
      </div>
    </div>
  );
};

export default ProductPage;
