import React from 'react';
import './Collection.scss'
import { Link } from 'react-router-dom'

const Collection = ({ items }) => {

  return (
    <>
      {
        items.map(item => {
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