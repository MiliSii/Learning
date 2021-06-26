import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './footer';
import App from './App';
import Main from './main';
import Header from './header';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>

    <App />
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
