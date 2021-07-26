import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <Link to="/" className="navbar-item" >Home</Link>
      <Link to="/Blogs" className="navbar-item" >Blogs</Link>
      <Link to="/LogIn" className="navbar-item" > LogIn</Link>
      <Link to="/SignUp" className="navbar-item" >SignUp</Link>
      <Link to="/Contact" className="navbar-item" >Contact</Link>
  </section>
  )

}

export default Navbar;