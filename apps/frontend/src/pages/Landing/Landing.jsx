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

      <div className='landing-body-container'>
        <h3 data-text="Build Your Kido's mind with" className='body-heading'>
          Build Your Kido's mind with
        </h3>
        <h1 className='learnz-word'>
          learnZ
        </h1>
      </div>
      
      <div className='landing-body-container-2'>
        <h1>Yet to add...</h1>
      </div>
    </div>
  )
}

export default Landing;
