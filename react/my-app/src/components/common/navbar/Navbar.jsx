import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item" >Home</a>
      <a href="/Blogs" className="navbar-item" >Blogs</a>
      <a href="/LogIn" className="navbar-item" > LogIn</a>
      <a href="/SignUp" className="navbar-item" >SignUp</a>
      <a href="/Contact" className="navbar-item" >Contact</a>
  </section>
  )

}

export default Navbar;