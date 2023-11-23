import { useEffect,useState } from 'react';
import './App.css';
import Home from './Pages/Home'; 
import NavBar from './Components/NavBar';
import {Routes , Route} from 'react-router-dom'
import Cart from './Pages/Cart';
import ProductList from './Components/ProductList';
import { CartProvider } from "react-use-cart"

function App() {
    const[products, getProduct] = useState([])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>getProduct(json))

    }, []);
    console.log(products)

  return (
    <div className="App">
      <>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home  products = {products}/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
          </Routes>
          <ProductList/>
        </CartProvider>
      </>
    </div>
  );
}

export default App;
