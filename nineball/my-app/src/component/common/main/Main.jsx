import React from 'react';
import {motion} from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import './Main.css';
import Slider from '../Slider/Slider';
function Main() {


  return (
      
      /*<div>
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
      </div>*/
  <Slider />
    
  )
}

export default Main;