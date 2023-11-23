import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';

import Header from './Components/Header';
import Footer from './Components/Footer';

import { CartProvider } from 'react-use-cart';



function App() {
  const [product, getProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => getProduct(json));
  }, []);

  const handleCategoryChange = (selectedCategory) => {
    const filteredProductsByCategory = product.filter((product) => product.category === selectedCategory);
    setFilteredProducts(filteredProductsByCategory);
  };

  const handleSearch = (searchedText) => {
    setSearchedProduct(searchedProduct);
    const filteredProductsBySearch = product.filter((product) => product.title.toLowerCase().includes(searchedText.toLowerCase()));
    setFilteredProducts(filteredProductsBySearch);
  };

  return (
    <div className="App">

      <Header />
      <CartProvider>
      <NavBar products={product} onCategoryChange={handleCategoryChange} onSearch={handleSearch} />

      <Routes basename = "/Phase2-Project">
        <Route path='/' element={<Home products={filteredProducts.length > 0 ? filteredProducts : product} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    <Footer />
      
      


      </CartProvider>
     

      
    </div>
  );
}

export default App;
