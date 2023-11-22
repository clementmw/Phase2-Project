import React, { useState } from 'react';

function Home({ products, filter }) {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const productList = products.map((product) => (
    <div className='col-md-3' key={product.id}>
      <div className='card'>
        <img src={product.image} className='card-img-top' alt='Product' style={{width:'300px', height:'300px'}} />
        <div className='card-body'>
          <h5 className='card-title'>{product.title}</h5>
          <h5 className='card-title'>{product.category}</h5>
          <p className='card-text'>
            {expanded ? product.description : `${product.description.slice(0, 100)}...`}
          </p>
          {product.description.length > 100 && (
            <button className='btn btn-link' onClick={toggleDescription}>
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
          <p className='card-text'>Price: ${product.price}</p>

          <button type='submit' className='btn btn-primary'> Add to cart</button>
           
         
        </div>
      </div>
    
    </div>
  ));

  return (
    <div>
      
      <div className='row'>{productList}</div>
    </div>
  );
}

export default Home;
