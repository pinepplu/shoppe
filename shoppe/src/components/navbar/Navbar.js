import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

function Navbar({ size }) {
  return (
    <div className='navbar-container'>
      <Link to='/' className='nav-logo'>Shoppé</Link>
      <div className='search-bar'>
        <input type="text" className='search' placeholder="Search..." />
      </div>
      <div className='nav-links'>
        <ul className='nav-links'>
          <li><Link to='/usestate'>useState</Link></li>
          <li><Link to='/womens'>Womens</Link></li>
          <li><Link to='/mens'>Mens</Link></li>
          <li><Link to='/login'>login</Link></li>
          <div className='cart'>
            <li><Link to='/cart'><ShoppingCart />cart{size}</Link></li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar