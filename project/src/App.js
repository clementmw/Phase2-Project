import './App.css';
import Home from './Pages/Home'; 
import NavBar from './Components/NavBar';
import {Routes , Route} from 'react-router-dom'
import Cart from './Pages/Cart';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
