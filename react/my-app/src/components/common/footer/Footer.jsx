import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';

import './Footer.css';

function Footer() {

  return (
   <section className='footer'>
      
      <ul className="no-bullets">
      
            <li><Link to="/About" target='_blank' rel="noopener noreferrer">About</Link><br /></li>

            <li><Link to="/TermsofService" target='_blank' rel="noopener noreferrer">Terms of Service</Link><br /></li>

            <li><Link to="/Privacy" target='_blank' rel="noopener noreferrer">Privacy</Link><br /></li>

            <li><Link to="/ContentPolicy" target='_blank' rel="noopener noreferrer">Content Policy</Link><br /></li>
        </ul >

        <p>Contacts:<br /><br />

            <a ><SocialIcon url="https://facebook.com"  target='_blank' rel="noopener noreferrer"/></a>
            <span>&nbsp;&nbsp;</span> 

            <a ><SocialIcon url="https://instagram.com" target='_blank' rel="noopener noreferrer"/></a>
            <span>&nbsp;&nbsp;</span> 

            <a ><SocialIcon url="https://twitter.com"  target='_blank' rel="noopener noreferrer"/></a>
                <span>&nbsp;&nbsp;</span> 
            <a ><SocialIcon url="https://linkedin.com" target='_blank' rel="noopener noreferrer" /></a><br /><br /><br />    
        </p><br /><br />

        <p > Email: sim*******7@gmail.com<br />
            Author: Milica Simovic</p>
    </section>
  )
}

export default Footer;