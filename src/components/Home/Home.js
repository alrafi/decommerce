import React, { useEffect, useState } from 'react';
import './Home.scss'
import Collection from '../Collection/Collection';
import Header from '../Header/Header';
import store from '../../api/store'
import Footer from '../Footer/Footer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Home = () => {
  const [products, setProducts] = useState([])
  const [totalCart, setTotalCart] = useState(0)

  useEffect(() => {
    const getCart = async () => {
      const listCart = await JSON.parse(localStorage.getItem("listCart"))
      setTotalCart(listCart ? listCart.length : 0)
    }
    getCart()
  }, [])

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
      <Header cart={totalCart} />
      <div className="main-container">
        {
          products.length === 0 ?
            <LoadingSpinner />
            :
            <main>
              <div className="featured-container">
                <h1>Holiday Deals</h1>
                <p>50% OFF</p>
              </div>
              <h2>Most Popular</h2>
              <div className="collection-container">
                <Collection items={products} />
              </div>
            </main>
        }
      </div>
      <Footer />
    </div>
  );
};

export default Home;