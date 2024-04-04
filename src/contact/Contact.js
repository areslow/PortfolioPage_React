import React, { useRef } from 'react'
import './Contact.css'
import msLogo from '../assets/msLogo.png'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import tg from '../assets/tg.png'
import wa from '../assets/wa.png'

import emailjs from '@emailjs/browser';



const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_v7xc3j8', 'template_iv6uvnq', form.current, {
        publicKey: 'Vfdq-Krl3rjZ7ADC1',
      })
      .then(
        () => {
          e.target.reset();
          alert('Message sent ! thank you for contacting me');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
      <div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientsDesc'>I have had the opportunity to work with a ... everything you need to say  goes here</p>
        <div className='clientsImgs'>
            <img src={msLogo} alt='client' className='clientImg'/>
            <img src={msLogo} alt='client' className='clientImg'/>
            <img src={msLogo} alt='client' className='clientImg'/>
            <img src={msLogo} alt='client' className='clientImg'/>
        </div>
      </div>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input name='from_name' type='text' className='name' placeholder='Your Name'/>
            <input name='from_email' type='email' className='email' placeholder='Your Email'/>
            <textarea name='message' className='msg' rows='5' placeholder='Put your message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Send</button>
        </form>
        <div className='links'>
            <img className='link' src={fb} alt='facebook'/>
            <img className='link' src={ig} alt='instagram'/>
            <img className='link' src={tg} alt='telegram'/>
            <img className='link' src={wa} alt='whats app'/>
        </div>
      </div>
    </section>
  )
}

export default Contact
