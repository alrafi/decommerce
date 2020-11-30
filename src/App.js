import React, {useEffect, useState} from 'react';
import store from './api/store'

const App = () => {
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

  if (!products) return;

  return (
    <div>
      <ul>
        {
          products.map(item => {
            return (
              <li key={item.id}>
                {item.title}
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default App;