import React, { useState } from 'react'
import './Landing.css'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Landing() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleContact = async() => {
    if(!name) {
      return toast.error('Please enter name', {theme: "dark"})
    }
    if(!validateEmail(email)) {
      return toast.error('Please enter a valid email', {theme: "dark"})
    }
    if(!message) {
      return toast.error('Please enter message', {theme: "dark"})
    }

    const body = {name, email, message}

    const res = await fetch(import.meta.env.VITE_POST_CONTACT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    if(!res.ok) {
      toast.warn(res.message, {theme: "dark"});
    }
    if(res.ok) {
      toast.success('We will contact you shortly soon!', {theme: "dark"});
    }
    setName('')
    setEmail('')
    setMessage('')

  }

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

      <div className="landing-body-container-3">
        <div className="left">
          <h1>Interested</h1>
          <h2>Schedule a call</h2>
          <h2>with us!</h2>
        </div>
        <div className="right">
          <div className='form-outline'>
            <input value={name} type='text' placeholder='Name'
             required onChange={(e) => setName(e.target.value)}
            />
            <input value={email} type='email' placeholder='Email' 
             required onChange={(e) => setEmail(e.target.value)} 
            />
            <textarea value={message} type='text' placeholder='Message' 
             required onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleContact}>Submit</button>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
      <ToastContainer/>
    </div>
  )
}

export default Landing;
