import React from 'react';
import { Navbar } from '../../common';


import './Header.css';

function Header() {

  return (
    
      <section className="main-header">

        <section className="header-top__logo">
          
          <img src='/logo/TYEmYif.png' alt='Mili Blog' id='logo'></img>

        </section>

        <section className="header-top__navbar">

          <section className="header-top__navigation">
            <Navbar />
          </section>

         
        </section>
     </section>

   
  )
}

export default Header;