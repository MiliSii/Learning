import React from 'react';
import {motion} from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import './Main.css';

function Main() {


  return (
      /*<motion.div className='carousel'>
          <motion.div className='inner-carousel'>
          {images.map(image =>{
              return(
                  <motion.div className='item'> 
                      <img 
              src={"image"}
              alt=""
              id="image"></img>
                  </motion.div>
              );
          })}
              

          </motion.div>

      </motion.div>*/

    
      <div>


          <h1>Nineball.</h1>


          <img title="Darts"
              src={"photos/darts.jpeg"}
              alt="darts game machine"
              id="image"></img>

          <img title="Darts"
              src={"photos/dartsFront.jpg"}
              alt="darts game machine"
              id="image"></img>
          <img title="nine-ball"
              src={"photos/nine_ball.jpg"}
              alt="darts game machine"
              id="image"></img>
      </div>
  
    
  )
}

export default Main;