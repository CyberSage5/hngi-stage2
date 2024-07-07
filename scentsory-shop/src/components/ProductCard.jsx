/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import '../index.css'; // Importing the global CSS

const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleContinueToCheckout = () => {
    // Implement your logic to proceed to checkout
    console.log(`Proceed to checkout for ${quantity} ${product.name}`);
  };

  const handleKeepShopping = () => {
    // Implement your logic to continue shopping
    console.log(`Continue shopping for ${product.name}`);
  };

  return (
    <div className="product-card" onClick={toggleExpand}>
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Rating: {product.rating}</p>
        {!expanded && (
          <p>
            <button>View Details</button>
          </p>
        )}
        {expanded && (
          <div>
            <p>Category: {product.category}</p>
            <p>
              Quantity:
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </p>
            <p>
              <button onClick={handleContinueToCheckout}>Continue to Checkout</button>
              <button onClick={handleKeepShopping}>Keep Shopping</button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
