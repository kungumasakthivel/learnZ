import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {

    const openEmail = () => {
        window.open("mailto:kungumasakthivel.k@gmail.com?subject=Enquery%20about%20learnZ");
    }
  return (
    <div className='footer-container'>
      <div className="footer-text">
        <p>&copy; learn<span className='footer-z'>Z</span></p>
      </div>
      <div className="social-icons">
        <div className='icon-email' onClick={openEmail}>
            <span>Email us: </span><FontAwesomeIcon icon={faEnvelope} />
        </div>
      </div>
    </div>
  )
}

export default Footer
