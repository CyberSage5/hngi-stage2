/* eslint-disable no-unused-vars */
import React from 'react';
import { ReactComponent as Logo } from '../assets/Scentsory.svg'; // SVG logo path
import '../index.css'; // Importing the global CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <Logo />
      </div>
      <div className="footer-links">
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>All Collection</li>
            <li>New Fragrance</li>
            <li>Discount</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>FAQs</li>
            <li>Cookie Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
      <div className="footer-payment">
        <h4>Payment Methods</h4>
        <div className="payment-icons">
          <img src="/images/logos_mastercard.jpg" alt="Mastercard" />
          <img src="/images/logos_paypal.jpg" alt="PayPal" />
          <img src="/images/logos_visa.jpg" alt="Visa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
