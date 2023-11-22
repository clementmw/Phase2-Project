import React, { useState } from 'react';

function Home({ products }) {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,    //use the spread operator//
      [id]: !prevExpanded[id],
    }));
  };
  

  const productList = products.map((product) => (

    <div className='col-md-3 mb-4' key={product.id}>
      <div className='card h-100'>
        <img
          src={product.image}
          className='card-img-top'
          alt='Product'
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className='card-body d-flex flex-column'>

          <h5 className='card-title'>{product.title}</h5>
          <h6 className='card-title'>{product.category.toUpperCase()}</h6>
          <p className='card-text flex-grow-1'>
            {expanded[product.id]
              ? product.description
              : `${product.description.slice(0, 100)}...`}
          </p>
          {product.description.length > 100 && (
            <button
              className='btn btn-link mt-auto'
              onClick={() => toggleDescription(product.id)}
            >
              {expanded[product.id] ? 'Read Less' : 'Read More'}
            </button>
          )}
          <p className='card-text'>Price: ${product.price}</p>


          <button type='submit' className='btn btn-primary'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>SwiftCart</h1>
      <div className='row'>{productList}</div>
    </div>
  );
}

export default Home;
