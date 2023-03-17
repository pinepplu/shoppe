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

function App() {
  const [cart, setCart] = useState([])
  return (
    <Router>
      <Navbar size={cart.length} />
        <>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/womens' element={<Womens />} />
            <Route path='/mens' element={<Mens />} />
            <Route path='/login' element={<Login />} />
            <Route path='/usestate' element={<UseState />} />
          </Routes>
          <Footer />
        </>
    </Router>
  );
}

export default App;
