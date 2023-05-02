import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Womens from './pages/Womens'
import Mens from './pages/Mens'
import Login from './pages/Login';
import UseState from './pages/UseState';
import { useState } from 'react';
import data from './components/products/Products';

function App() {

  //products data
  const { products } = data;
  const [cart, setCart] = useState([])

  //event handlers
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id)
    if (exist) {
      // if the product already exists in cart, increase the quantity of item according to the 
      // current product id
      setCart(cart.map(item => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      ));
    } else {
      //if product is new then set quantity to 1
      setCart([...cart, { ...product, qty: 1 }])
    }
  }
  //decrease qty, remove from cart
  const removeFromCart = (product) => {
    //search for cart item with specific product id
    const exist = cart.find((item) => item.id === product.id)
    if (exist.qty === 1) {
      //if product does exist in cart remove from cart otherwise return true
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      //quantity is more than 1 i.e 2+ , decrease 1 from quantity
      setCart(cart.map(item => item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      ));
    }
  }
  //remove item from cart
  const removeItemFromCart = (product) => {
    //search for cart item with specific product id
    const exist = cart.find((item) => item.id === product.id)
    if (exist) {
      //if product does exist in cart remove from cart otherwise return true
      setCart(cart.filter((item) => item.id !== product.id));
    }
  }

  //total number in cart, minimum amount is 0
  const itemscount = cart.reduce((amount, current) => amount + current.qty, 0)

  return (
    <Router>
      <Navbar itemscount={itemscount} />
        <>
          <Routes>
            <Route path='/' element={<Home products={products} addToCart={addToCart} />} />
            <Route path='/cart' element={<Cart cartitems={cart} removeFromCart={removeFromCart} 
            removeItemFromCart={removeItemFromCart} addToCart={addToCart} />} />
            <Route path='/womens' element={<Womens addToCart={addToCart} />} />
            <Route path='/mens' element={<Mens addToCart={addToCart} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/usestate' element={<UseState />} />
          </Routes>
          <Footer />
        </>
    </Router>
  );
}

export default App;
