
import React from 'react';
//import Navbar from './navbar'
import {motion} from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import './Header.css';

function Header() {

  return (
    
      <section className="main-header">

        <section className="header-top__logo">
          
          <img src='/logo/nineballLogo.jpg' alt='Nineball.' id='logo'></img>

       
        </section>

        <selection>
          <motion.h3 animate={{x:400}}>Wellcome to Nineball.</motion.h3>

        </selection>

        <selection>
          
          <a href="#" class="myButton">booking</a>
        </selection>

        

     </section>

   
  )
}

export default Header;