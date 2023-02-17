import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <Link to='/' className='logo'><h4>Shoppe</h4></Link>
      <div className='newsletter'>
        <h4>Newsletter</h4>
        <form>
          <input type="text" placeholder='Email...' />
          <button type='submit'>Subscribe</button>
        </form>
      </div>
      <div className='socials'>
        <h4>Socials</h4>
        <p className='social-contents'>
          <Link to='/'>Instagram</Link>
          <br></br>
          <Link to='/'>Facebook</Link>
          <br></br>
          <Link to='/'>GitHub</Link>
        </p>
      </div>
      <div className='contact-us'>
        <h4>Contact Us</h4>
        <p className='contact-contents'>
          Hours of Operation:
          <br></br>
          Monday - Friday 10:00AM to 5PM
          <br></br>
          Saturday - Sunday CLOSED
        </p>
      </div>
      <div className='copyright'>
        &copy; Copyright
      </div>
    </div>
  )
}

export default Footer