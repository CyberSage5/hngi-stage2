/* eslint-disable no-unused-vars */
import React from 'react';
import '../index.css';
import scentsoryLogo from '../assets/Scentsory.svg';
import profileIcon from '/public/images/profile-icon.png';
import cartIcon from '/public/images/cart-icon.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={scentsoryLogo} alt="Scentsory Logo" />
      </div>
      <nav className="nav-links">
        <a href="/">Shop</a>
        <a href="/about">About Us</a>
        <a href="/blog">Blog</a>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="icons">
        <a href="/profile"><img src={profileIcon} alt="Profile" /></a>
        <a href="/cart"><img src={cartIcon} alt="Cart" /></a>
      </div>
    </header>
  );
};

export default Header;
