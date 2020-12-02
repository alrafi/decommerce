import React, { useState, useEffect } from 'react';
import './DetailItem.scss'
import Header from '../Header/Header';
import store from '../../api/store'
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const DetailItem = (props) => {
  const [product, setProduct] = useState(null)
  const [category, setCategory] = useState("")
  const [relatedProducts, setRelatedProducts] = useState([])
  const [totalCart, setTotalCart] = useState(0)
  const [addedCart, setAddedCart] = useState(false)
  const [reviews, setReviews] = useState(0)
  const [discussions, setDiscussions] = useState(0)

  useEffect(() => {
    const getCart = async () => {
      const listCart = await JSON.parse(localStorage.getItem("listCart"))
      setTotalCart(listCart ? listCart.length : 0)
      if (listCart) {
        if (product) {
          const find = listCart.findIndex(el => el.id === product.id)
          setAddedCart(find !== -1 ? true : false)
        }
      }
    }
    getCart()
  }, [product])

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

  useEffect(() => {
    setReviews(randomCount())
    setDiscussions(randomCount())
  }, [])

  const addToCart = () => {
    const listCart = JSON.parse(localStorage.getItem("listCart"))
    let listToBeAdded = []
    if (addedCart) {
      const list = listCart.filter(item => item.id !== product.id)
      listToBeAdded = [...list]
      setTotalCart(listCart.length - 1)
      setAddedCart(false)
    } else {
      if (!listCart) {
        listToBeAdded = [product]
        setTotalCart(1)
      } else {
        listToBeAdded = [...listCart, product]
        setTotalCart(listCart.length + 1)
      }
      setAddedCart(true)
    }
    localStorage.setItem("listCart", JSON.stringify(listToBeAdded));
  }

  const randomCount = () => {
    return Math.floor(1000 + Math.random() * 9000);
  }

  return (
    <div className="detail-container">
      <Header cart={totalCart} />
      <div className="detail-main-container">
        {
          !product ?
            <LoadingSpinner />
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
                    <p>{reviews} Rating</p>
                    <span>|</span>
                    <p>{discussions} Discussion</p>
                  </div>
                  <p className="item-price">USD {product.price}</p>
                  <p className="item-description-label">Description</p>
                  <p className="item-description">{product.description}</p>
                  <div className="button-container">
                    <button className={`add-cart ${addedCart ? 'added-cart' : ''}`} onClick={addToCart}>
                      {
                        addedCart ? "Added to Cart" : "Add to Cart"
                      }
                    </button>
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
      <Footer />
    </div >
  );
};

export default DetailItem;