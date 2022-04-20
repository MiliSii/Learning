import {useState, useEffect} from "react";
import "./Slider.css";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import { sliderData } from "./slider_data";


const Slider =()=>{
    const[currentSlide,setCurrentSlide]=useState(0);
    const slideLength=sliderData.length;/* slideLength=1 2 3 ako iskoristimo console.log  */
    //currentSlide=0 1 2  to su pozicije 
    
    const autoScroll=true;
    let slideInterval;
    let intervalTime=5000;

    const nextSlide=()=>{
        setCurrentSlide(currentSlide===slideLength -1?0:currentSlide +1);

    };

    const prevSlide=()=>{
        setCurrentSlide(currentSlide===0?slideLength -1:currentSlide -1);

    };

    function auto(){
        slideInterval=setInterval(nextSlide,intervalTime);
    }
    
    useEffect(()=>{
        setCurrentSlide(0);
    },[]);

    useEffect(()=>{
        if(autoScroll){
            auto();
        }
        return()=>clearInterval(slideInterval);
    },[currentSlide]);
    
    return(
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide}/>
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide}/>

            {sliderData.map((slide, index)=>{
                return(
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}/*ako treba da se brise i dodaje stavlja se unique identifikator umesto key*/>
                        {index === currentSlide && (
                            <div>
                             <img src={slide.image} alt="slide" />
                             <div className="content">
                                 <h2>{slide.heading}</h2>
                                 <p>{slide.desc}</p>
                                 <hr />
                                 <button className="--btn--btn-primary">Get Started</button>
                             </div>
                            </div>
                        )}
                    </div>
                )
            })}

            <h1>Slider</h1>

        </div>
    );
}

export default Slider;