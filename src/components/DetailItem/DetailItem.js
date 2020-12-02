import React, { useState, useEffect } from 'react';
import './DetailItem.scss'
import Header from '../Header/Header';
import store from '../../api/store'
import spinner from '../../assets/img/spinner.svg'

const DetailItem = (props) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await store.get(`/products/${props.match.params.id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
        return;
      }
    };
    getProduct();
  }, [props.match.params.id])

  return (
    <div className="detail-container">
      <Header />
      {
        !product ?
          <img src={spinner} alt="" />
          :
          <div className="detail-item-container">
            <div className="item-info-wrapper">
              <div className="img-item-container">
                <img src={product.image} alt="" />
              </div>
              <div className="info-item-container">
                <h1>{product.title}</h1>
                <p className="item-price">USD {product.price}</p>
                <button>Add to Cart</button>
                <button>Buy Now</button>
                <p>Description:</p>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default DetailItem;