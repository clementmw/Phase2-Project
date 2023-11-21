import { useEffect,useState } from 'react';
import './App.css';
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
      <h1>project</h1>
      <ProductList/>
      
    </div>
  );
}

export default App;
