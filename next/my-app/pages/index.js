import React from 'react';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>


      <Head>
        <div>jhgdgfgfdh


        <img src='/logo/TYEmYif.png' alt='Mili Blog' id='logo'></img>

          <div>
          <Link href={{pathname: '/',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>Home</a></Link><br />
          <Link href={{pathname: '/Blogs',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>Blogs</a></Link><br />
          <Link href={{pathname: '/LogIn',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>LogIn</a></Link><br />
          <Link href={{pathname: '/SignUp',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>SignUp</a></Link><br />
          <Link href={{pathname: '/Contact',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>Contact</a></Link><br />
          </div>
          
        </div>



      </Head>



      <main className={styles.main}>
        <div>
          <h1 >Just to remind myself</h1>
          <p >"Every time you suppress some part of yourself or allow others to play you small, you are
            ignoring
            the owner’s manual your Creator gave you.What I know for sure is this: You are built not to shrink down to
            less
            but to blossom into more. To be more splendid. To be more extraordinary. To use every moment to fill
            yourself
            up."
          </p>
          <h2 >Inspirational quotes:</h2>
          <ul >
            <li>"Where there is no struggle there is no strength."</li>
            <li>"You look at yourself and you accept yourself for who you are, and once you accept yourself for who
              you are
              you become a better person."</li>
            <li>"Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The
              only people
              who never tumble are those who never mount the high wire. This is your moment. Own it."</li>
          </ul>
          <img title="Fearless Motivational Quote"
            src={"https://cdn.shopify.com/s/files/1/0070/7032/files/Fearless_Motivational_Quote_Desktop_Wallpaper_1.png?format=jpg&quality=90&v=1600450412"}
            alt="Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill"
            id="image" height="250"></img>
        </div>

      </main>



      <footer className={styles.footer}>
        <div>
        <section className='footer'>
      
      <ul className="no-bullets">
        
      <li><Link href={{pathname: '/About',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>About</a></Link><br /></li>
      <li><Link href={{pathname: '/TermsofService',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>TermsofService</a></Link><br /></li>      
      <li><Link href={{pathname: '/Privacy',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>Privacy</a></Link><br /></li>      
      <li><Link href={{pathname: '/ContentPolicy',query: { name: 'test' },}} target='_blank' rel="noopener noreferrer"><a>ContentPolicy</a></Link><br /></li>      

        </ul >

        

        <p > Email: sim*******7@gmail.com<br />
            Author: Milica Simovic</p>
    </section>
        </div>
      </footer>

    </div>
  )
}
