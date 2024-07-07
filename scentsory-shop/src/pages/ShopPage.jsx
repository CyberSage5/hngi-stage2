/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../index.css';

const ShopPage = () => {
  const [visibleProducts, setVisibleProducts] = useState(9);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => Math.min(prev + 9, products.length));
  };

  return (
    <div className="shop-page">
      <Header />
      <Banner />
      <div className="product-list">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <button className="load-more" onClick={loadMoreProducts}>
          Load More
        </button>
      )}
    </div>
  );
};

export default ShopPage;
