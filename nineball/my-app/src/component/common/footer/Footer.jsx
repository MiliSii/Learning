import React from 'react';
import {GrFormLocation} from 'react-icons/gr';
import {FaPhone} from 'react-icons/fa';
import {WiTime8} from 'react-icons/wi';

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";
import { useRef, useEffect, useState } from 'react';

import './Footer.css';

function Footer() {

  return (
    <section className='footer'>
      
        <p><GrFormLocation /> Sabac<br/>
        <WiTime8 /> 20:00-02:00<br/>
        <FaPhone /> +381 64 1301440 <br/></p>
        

        <p>Kontaktirajte nas:<br /><br />
        <SocialIcon url="https://twitter.com/jaketrent" /><span /> <span />
        <SocialIcon url="https://instagram.com" target='_blank' rel="noopener noreferrer"/><span /> <span />
        <SocialIcon url="https://facebook.com" target='_blank' rel="noopener noreferrer"/><span /> <span />
               
        </p><br /><br />

        
    </section>
  )
}

export default Footer;