import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

function Navbar() {
  return (
    <div className='navbar-container'>
      <Link to='/' className='nav-logo'>Shoppé</Link>
      <div className='search-bar'>
        <input type="text" className='search' placeholder="Search..." />
      </div>
      <ul>
        <li><Link to='/womens'>Womens</Link></li>
        <li><Link to='/mens'>Mens</Link></li>
        <li><Link to='/login'>login</Link></li>
        <li><Link to='/cart'><ShoppingCart/></Link></li>
      </ul>
    </div>
  );
}

export default Navbar