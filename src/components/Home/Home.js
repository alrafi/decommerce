import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom'
import icon from '../../assets/img/icon-decommerce.svg'
import Collection from '../Collection/Collection';

const Home = () => {
  return (
    <div className="home-container">
      <header className="header-container">
        <div className="header-wrapper">
          <Link to='/'>
            <div className="title-wrapper">
              <img src={icon} alt="" />
              <h1>Decommerce</h1>
            </div>
          </Link>
          <nav>
            <ul>
              <Link to='/about'><li>Login</li></Link>
              <Link to='/projects'><li>Signup</li></Link>
            </ul>
          </nav>
          <div className="nav-menu">
            <img src="" alt="" />
          </div>
          <div className="mobile-menu">
            <ul>
              <li>Login</li>
              <li>Signup</li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className="featured-container"></div>
        <div className="category-container"></div>
        <h2>Most Popular</h2>
        <div className="collection-container">
          <Collection />
        </div>
      </main>
    </div>
  );
};

export default Home;