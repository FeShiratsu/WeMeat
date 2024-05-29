import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Header from './Components/Header';
import Login from './Pages/Login';
import Payment from './Pages/Payment';
import Register from './Pages/Register';
import Order from './Pages/Order';
import { useState} from 'react';
import {createItemJS} from './Objects/OrderItem'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'


function App() {
  const [parentState, setParentState] = useState('');
  const [cart, setCart] = useState([createItemJS({name: "Name",price: "Price",quantity: "Quantity"})]);
  return (
    <Router>
      <Header></Header>
      <Routes>
          <Route exact path="/" element={<Home state={setParentState}></Home>}></Route>
          <Route  path="/login" element={<Login></Login>}></Route>
          <Route  path="/register" element={<Register></Register>}></Route>
          <Route  path="/order" element={<Order cart={cart} cartSet={setCart}></Order>}></Route>
          <Route  path="/payment" element={<Payment></Payment>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
