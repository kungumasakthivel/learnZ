import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='nav-bar-container'>
        <div className='nav-bar-title'>
          <NavLink to='/' className='nav-links'>
            <h2>learn<span className='header-z'>Z</span></h2>
          </NavLink>
        </div>
        <div className='nav-bar-options'>
          <NavLink to='/projects' className='nav-links'>
            <p>Product</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
