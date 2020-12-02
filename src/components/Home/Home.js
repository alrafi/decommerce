import React from 'react';
import './Home.scss'
import { Link } from 'react-router-dom'
import Collection from '../Collection/Collection';
import Header from '../Header/Header';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
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