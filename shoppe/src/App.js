import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Womens from './pages/Womens'
import Mens from './pages/Mens'

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/mens' element={<Mens />} />
        </Routes>
      </Router>
  );
}

export default App;
