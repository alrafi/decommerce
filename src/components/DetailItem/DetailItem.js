import React, { useState, useEffect } from 'react';
import './DetailItem.scss'
import Header from '../Header/Header';
import store from '../../api/store'
import spinner from '../../assets/img/spinner.svg'
import Collection from '../Collection/Collection';

const DetailItem = (props) => {
  const [product, setProduct] = useState(null)
  const [category, setCategory] = useState("")
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await store.get(`/products/${props.match.params.id}`);
        setProduct(res.data);
        setCategory(res.data.category)
      } catch (err) {
        console.log(err);
        return;
      }
    };
    getProduct();
  }, [props.match.params.id])

  const randomCount = () => {
    return Math.floor(1000 + Math.random() * 9000);
  }

  useEffect(() => {
    const getRelated = async () => {
      try {
        const res = await store.get(`/products`);
        const related = res.data.filter(item => item.category === category)
        setRelatedProducts(related)
      } catch (err) {
        console.log(err);
        return;
      }
    };
    getRelated();
  }, [category])

  return (
    <div className="detail-container">
      <Header />
      {
        !product ?
          <img src={spinner} alt="" />
          :
          <div className="detail-item-container">
            <h2>Collection > <span>{product.category}</span></h2>
            <div className="item-info-wrapper">
              <div className="img-item-container">
                <img src={product.image} alt="" />
              </div>
              <div className="info-item-container">
                <h1>{product.title}</h1>
                <div className="rating-container">
                  <p>{randomCount()} Rating</p>
                  <span>|</span>
                  <p>{randomCount()} Discussion</p>
                </div>
                <p className="item-price">USD {product.price}</p>
                <p className="item-description-label">Description</p>
                <p className="item-description">{product.description}</p>
                <div className="button-container">
                  <button className="add-cart">Add to Cart</button>
                  <button className="buy-now">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="related-container">
              <h2 className="related-title">RELATED PRODUCTS</h2>
              <div className="related-item-container">
                {
                  relatedProducts.length > 0 &&
                  <Collection items={relatedProducts} />
                }
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default DetailItem;