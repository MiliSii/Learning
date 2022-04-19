import React from 'react';
import { Header, Navbar } from './component/common';
import { Main } from './component/common';
import { Footer } from './component/common';/*
import LogIn from './LogIn';
import About from './About';
import ContentPolicy from './ContentPolicy';
import SignUp from './SignUp';
import Privacy from './Privacy';
import TermsofService from './TermsofService';
import {Switch,Route} from 'react-router-dom';
import Contact from './Contact';
import Blogs from './Blogs';*/

import {motion} from "framer-motion";
import { useRef, useEffect, useState } from 'react';

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      
      <Main />
      
     
      <Footer />

      

      
      
    </div>
  );
}

export default App;