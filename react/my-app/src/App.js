import React from 'react';
import { Header } from './components/common';
import { Main } from './components/common';
import { Footer } from './components/common';
import LogIn from './LogIn';
import About from './About';
import ContentPolicy from './ContentPolicy';
import SignUp from './SignUp';
import Privacy from './Privacy';
import TermsofService from './TermsofService';


import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      <LogIn />
      <About />
      <ContentPolicy />
      <SignUp />
      <Privacy />
      <TermsofService />
      
    </div>
  );
}

export default App;