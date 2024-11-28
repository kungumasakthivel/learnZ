import React from 'react'
import './PageNotFound.css'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='error-page'>
      <h1>Page Not Found - 404</h1>
      <p>Click <NavLink to='/'>here</NavLink> to home page</p>
    </div>
  )
}

export default PageNotFound
