import React, { useEffect, useState } from 'react';
import './Home.scss'
// import { Link } from 'react-router-dom'
import Collection from '../Collection/Collection';
import Header from '../Header/Header';
import store from '../../api/store'
import spinner from '../../assets/img/spinner.svg'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await store.get('/products');
        setProducts(res.data);
      } catch (err) {
        console.log(err);
        return;
      }
    };
    getProducts();
  }, [])

  return (
    <div className="home-container">
      <Header />
      {
        products.length === 0 ?
          <img src={spinner} alt="" className="loading-spinner" />
          :
          <main>
            <div className="featured-container">
              <h1>Holiday Deals</h1>
              <p>50% OFF</p>
            </div>
            <div className="category-container"></div>
            <h2>Most Popular</h2>
            <div className="collection-container">
              <Collection items={products} />
            </div>
          </main>
      }
    </div>
  );
};

export default Home;