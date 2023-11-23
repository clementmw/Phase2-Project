import React, { useState } from 'react';
import { useCart } from 'react-use-cart';

function Home({ products }) {
  const [expanded, setExpanded] = useState(false);
  const { addItem, removeItem, inCart } = useCart();

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleClick = (product) => {
    if (inCart(product.id)) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  const productList = products.map((product) => (
    <div className='col-md-3' key={product.id}>
      <div className='card'>
        <img src={product.image} className='card-img-top' alt='Product' />
        <div className='card-body'>
          <h5 className='card-title'>{product.title}</h5>
          <p className='card-text'>
            {expanded ? product.description : `${product.description.slice(0, 100)}...`}
          </p>
          {product.description.length > 100 && (
            <button className='btn btn-link' onClick={toggleDescription}>
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
          <p className='card-text'>Price: ${product.price}</p>
          <button
            className={inCart(product.id) ? 'btn btn-danger' : 'btn btn-primary'}
            onClick={() => handleClick(product)}
          >
            {inCart(product.id) ? 'Remove from cart' : 'Add to cart'}
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1 className='text-center'>SwiftCart</h1>
      <div className='row'>{productList}</div>
    </div>
  );
}

export default Home;