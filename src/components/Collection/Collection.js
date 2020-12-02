import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Collection.scss'
import store from '../../api/store'
import spinner from '../../assets/img/spinner.svg'

const Collection = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await store.get('/products');
        console.log(res.data)
        setProducts(res.data);
      } catch (err) {
        console.log(err);
        return;
      }
    };
    getProducts();
  }, [])

  return (
    <>
      {
        products.length === 0 ?
          <img src={spinner} alt="" />
          :
          products.map(item => {
            return (
              <div key={`collection-item-${item.id}`} className="item-container">
                <Link to={`/detail/${item.id}`}>
                  <div className="img-container" style={{ background: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                </Link>
                <div className="item-info-container">
                  <p className="item-title">{item.title}</p>
                  <p className="item-price">USD {item.price}</p>
                </div>
              </div>
            )
          })
      }
    </>
  );
};

export default Collection;