import { useEffect,useState } from 'react';
import './App.css';
import Home from './Pages/Home'; 
import NavBar from './Components/NavBar';
import {Routes , Route} from 'react-router-dom'
import Cart from './Pages/Cart';
import ProductList from './Components/ProductList';


function App() {
    const[product, getProduct] = useState([])

    useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>getProduct(json))

    }, []);
    console.log(product)

  return (
    <div className="App">

      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>

      <h1>project</h1>
      <ProductList/>

      
    </div>
  );
}

export default App;
