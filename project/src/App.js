import { useEffect, useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import ProductList from './Components/ProductList';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  const [product, getProduct] = useState([]);
  const [filteredProducts, setfFilterProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => getProduct(json));
  }, []);

  console.log(product);


  const handleCategoryChange = (selectedCategory) => {
    const filteredProducts = product.filter((product) => product.category === selectedCategory);
        setfFilterProduct(filteredProducts)
  };

  return (
    <div className="App">
      <Header />
      <NavBar products={product} onCategoryChange={handleCategoryChange} />
      <Routes>
        <Route path='/' element={<Home products={filteredProducts.length > 0 ? filteredProducts : product}/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
      
      
      
    </div>
  );
}

export default App;
