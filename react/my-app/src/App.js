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
import {Switch,Route} from 'react-router-dom';
import Contact from './Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      
      
        <Switch>
          <Route path='/' exact><Main /></Route >
          <Route path='/About' exact><About /></Route>
          <Route path='/ContentPolicy' exact><ContentPolicy /></Route>
          <Route path='/LogIn' exact><LogIn /></Route>
          <Route path='/Privacy' exact><Privacy /></Route>
          <Route path='/SignUp' exact><SignUp /></Route>
          <Route path='/TermsofService' exact><TermsofService /></Route>
          <Route path='/Contact' exact><Contact /></Route>
          
        </Switch>


      
      <Footer />

      
      
    </div>
  );
}

export default App;