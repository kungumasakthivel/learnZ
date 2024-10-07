import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className='nav-bar-container'>
        <div className='nav-bar-title'>
          <h2>learnZ</h2>
        </div>
        <div className='nav-bar-options'>
          <p>Product</p>
          <p>Login</p>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
