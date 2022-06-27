import React, { useState } from 'react';
import logo from './logo.svg';
import './Contact.css';
import anime from 'animejs';
import ReactAnime from 'react-animejs'

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

function onSubmit(e) {
  e.preventDefault();
}


function Contact() {
  return (
    <div className='main-container bg-blue-400'>
       <a className='home-link' href='/'>Home</a>
      <form className='formContainer' onSubmit={onSubmit}>
        <input placeholder='first name' className='form-input' type="text" name="firstName" />
        <input placeholder='last name' className='form-input' type="text" name="lastName" />
        <input placeholder='email' className='form-input' type="text" name="email" />
        <button  className='submitBtn' value="submit"> Submit </button>
      </form>
    </div>

  );
}

export default Contact;
