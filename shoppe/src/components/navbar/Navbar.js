import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-container'>
      <Link to='/'>Shoppe</Link>
      <ul>
        <li><Link to='/womens'>Womens</Link></li>
        <li><Link to='/mens'>Mens</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
    </div>
  );
}

export default Navbar