import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Womens from './pages/Womens'
import Mens from './pages/Mens'
import Login from './pages/Login';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
