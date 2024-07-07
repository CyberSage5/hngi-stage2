/* eslint-disable no-unused-vars */
import React from 'react';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h2>Order Summary</h2>
      <div className="order-details">
        {/* Order items will be listed here */}
      </div>
      <div className="promo-code">
        <input type="text" placeholder="Promo Code" />
        <button>Apply</button>
      </div>
      <button className="checkout-button">Continue to Checkout</button>
    </div>
  );
};

export default CheckoutPage;
