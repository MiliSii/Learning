
import React from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About(){
    return(


        <div className={styles.container}>
            <Head>
        <div>

          <section className="main-header">

            <section className="header-top__logo">
              <Image src='/logo/TYEmYif.png' alt='Mili Blog' id='logo'/>
            </section>

            <section className="header-top__navbar">
              <section className="header-top__navigation">
              <section className="navbar">
                
                  <Link href={{ pathname: '/', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer" className="navbar-item"><a>Home</a></Link><span>&nbsp;&nbsp;</span>
                  <Link href={{ pathname: '/Blogs', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer" className="navbar-item"><a>Blogs</a></Link><span>&nbsp;&nbsp;</span>
                  <Link href={{ pathname: '/LogIn', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer" className="navbar-item"><a>LogIn</a></Link><span>&nbsp;&nbsp;</span>
                  <Link href={{ pathname: '/SignUp', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer" className="navbar-item"><a>SignUp</a></Link><span>&nbsp;&nbsp;</span>
                  <Link href={{ pathname: '/Contact', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer" className="navbar-item"><a>Contact</a></Link><span>&nbsp;&nbsp;</span>
                
                </section>
                </section>
            </section>

          </section>

          <style jsx>{`
        .header {
          margin-top: 20px;
          
          display: flex;
          flex: 1;
          flex-direction: column;
         
      
          padding: 10px 25px;
          box-shadow: 0px 5px 15px rgb(8, 65, 221);
          background-color: white;
         /* margin: auto;*/
          width: auto;
        }
        
        .header-top {
          display: flex;
          width: 100%;
          height: 50px;
        }
        
        .main-header{
         
          display: flex;
          flex-direction:row;
          justify-content:space-between;
           
      
          padding: 5px 5px;
          box-shadow: 0px 5px 15px rgb(8, 65, 221);
          background-color: white;
          margin: auto;
          width: auto;
      }
      
        #logo {
          display: flex;
          justify-content:center;
          align-items: center;
          margin-right: auto;
          height: auto;
          width: auto;
          border: auto;
          width: 88%;
          max-width: 250px;
          margin: auto auto; 
        }
        
        
        
        .header-top__navbar {
          display: flex;
          flex: 1;
          flex-direction: column;
        }
        /*
        .header-top__seperator {
          width: 100%;
          border: none;
          height: 2px;
          margin-top: 2px;
          background-color: black;
        }*/
        
        .header-top__navigation {
          display: flex;
          flex: 1;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          margin-right: 5px;
          margin-top: 5px;
        }
         /*
        .header-bottom {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          align-items: center;
          margin-top: 6px;
          
        }
       
        .header-bottom__email {
          margin-right: 55px;
          
        }
        
        .header-bottom__phone {
          margin-right: 65px;
        }
        
        .header-bottom__bag {
          position: absolute;
          display: flex;
        }
        
        .header-bottom__bag-icon {
          position: relative;
          display: flex;
          left: -5px;
          width: 30px;
          height: 30px; 
        }
        
        .header-bottom__bag-count {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: RobotoRegular;
          right: 0px;
          top: -5px;
          width: 20px;
          height: 20px;
          background-color: red;
          border-radius: 10px;
          color: white;
        }
      */
        #image{
         
          width: 100%;
          max-width: 1500px;
          margin: 24px auto; 
          
      }
      
      `}</style>
          
        </div>

       

      </Head>
      <main className={styles.main}>


            <h1>About</h1>
            <p>This page is about Mili blogs</p>

            </main>
        
        <footer className={styles.footer}>
        <div>
          <section className='footer'>

            <ul className="no-bullets">

              <li><Link href={{ pathname: '/About', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer"><a>About</a></Link><br /></li>
              <li><Link href={{ pathname: '/TermsofService', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer"><a>TermsofService</a></Link><br /></li>
              <li><Link href={{ pathname: '/Privacy', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer"><a>Privacy</a></Link><br /></li>
              <li><Link href={{ pathname: '/ContentPolicy', query: { name: 'test' }, }} target='_blank' rel="noopener noreferrer"><a>ContentPolicy</a></Link><br /></li>

            </ul >
           


            <p > Email: sim*******7@gmail.com<br />
              Author: Milica Simovic</p>
          </section>



          <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
      
          align-items:flex-start;
          padding: 25px 25px;
          background-color: rgb(255, 255, 255);
          box-shadow: 0px 5px 15px rgb(8, 65, 221);
      
          font-size: 25px;
          text-align: justify;
          font-family: 'Dancing script', cursive;
          line-height: 1;
      
          margin: auto;
          width: 1250px;
          height: 250px;
          
      }
      ul.no-bullets {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      `}</style>
        </div>
      </footer>
      </div>
    )
}

