/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Rating: {product.rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
