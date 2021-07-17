import React from 'react';

import './Footer.css';

function Footer() {

  return (
   <section className='footer'>
      
      <ul className="no-bullets">
            
            <li><a href="/About" target='_blank' rel="noopener noreferrer">About</a><br /></li>

            <li><a href="/TermsofService" target='_blank' rel="noopener noreferrer">Terms of Service</a><br /></li>

            <li><a href="/Privacy" target='_blank' rel="noopener noreferrer">Privacy</a><br /></li>

            <li><a href="/ContentPolicy" target='_blank' rel="noopener noreferrer">Content Policy</a><br /><br /><br /></li>
        </ul >

        <p>Contacts:<br /><br />

            <a href={"https://www.facebook.com/milica.simovic.543/"} target='_blank'  className="fa fa-facebook" rel="noopener noreferrer"></a>

            <a href={"https://www.instagram.com/mili.sii/"} target='_blank' className="fa fa-instagram" rel="noopener noreferrer">Instagram</a>

            <a href={"https://login.yahoo.com/?.intl=us&.lang=en-US&src=ym&activity=mail-direct&pspid=159600001&done=https%3A%2F%2Fmail.yahoo.com%2Fd&add=1"}
                 className="fa fa-yahoo" target='_blank' rel="noopener noreferrer">Yahoo mail</a><br /><br /><br />
                
        </p><br /><br />

        <p> Email: sim*******7@gmail.com<br />
            Author: Milica Simovic</p>
    </section>
  )
}

export default Footer;