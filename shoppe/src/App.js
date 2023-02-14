import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Womens from './pages/Womens'
import Search from './pages/Search'
import Mens from './pages/Mens'

function App() {
  return (
    <><Navbar /><div className='routes'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='/search' element={<Search />} />
        <Route path='/mens' element={<Mens />} />
      </Routes>
    </div></>
  );
}

export default App;
