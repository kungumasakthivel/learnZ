import React from 'react'
import './Landing.css'

function Landing() {
  return (
    <div className='landing-page-container'> 
      <nav className='nav-bar-container'>
        <div className='nav-bar-title'>
          <h2>learnZ</h2>
        </div>
        <div className='nav-bar-options'>
          <p>Home</p>
          <p>About</p>
          <p>Product</p>
          <p>Login</p>
        </div>
      </nav>
    </div>
  )
}

export default Landing;
