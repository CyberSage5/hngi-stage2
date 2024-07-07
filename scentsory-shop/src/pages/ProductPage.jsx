/* eslint-disable no-unused-vars */

import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

const ProductPage = () => {
  const { id } = useParams(); // Get the product id from URL params

  // Fetch product details based on id from your data source (e.g., API or local data)
  // Example usage with static data:
  const product = {
    id: id,
    name: `Product ${id}`,
    rating: 4.5,
    category: 'Sample Category',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    // Add more fields as needed
  };

  return (
    <div className="product-page">
      <h2>{product.name}</h2>
      <p>Rating: {product.rating}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductPage;
