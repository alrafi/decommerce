import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom'
import icon from '../../assets/img/icon-decommerce.svg'
import iconCart from '../../assets/img/icon-cart.svg'

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <Link to='/'>
          <div className="title-wrapper">
            <img src={icon} alt="" />
            <h1>Decommerce</h1>
          </div>
        </Link>
        <nav>
          <img src={iconCart} alt="" className="cart" />
          <div className="cart-count">0</div>
        </nav>
        <div className="nav-menu">
          <img src="" alt="" />
        </div>
        <div className="mobile-menu">
          <img src={iconCart} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;