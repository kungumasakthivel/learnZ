import React from 'react'
import './Landing.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

function Landing() {
  return (
    <div className='landing-page-container'> 
      <Navbar />

      <div className='landing-body-container'>
        <h3 data-text="Build Your Kido's mind with" className='body-heading'>
          Build Your Kido's mind with
        </h3>
        <h1 className='learnz-word'>
          learnZ
        </h1>
      </div>
      
      <div className='landing-body-container-2'>
        <div className='layer-1'>
          <div className='box-1'>
            <h1 className='learnz-word'>
              learnZ
            </h1>
          </div>
          <div className='box-2'>
            <h1>Platform to</h1>
            <h1>boost your kids</h1>
            <h1>intelligence with</h1>
            <h1>interactive games🎮</h1>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Landing;
