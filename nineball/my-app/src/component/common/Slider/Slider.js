import {useState, useEffect} from "react";
import "./Slider.css";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import { sliderData } from "./slider_data";


const Slider =()=>{
    const[currentSlide,setCurrentSlide]=useState(0);
    const slideLenghth=sliderData.length;
    useEffect(()=>{
        setCurrentSlide(0)
    },[])
    
    return(
        <div className="slider">
            <AiOutlineArrowLeft className="arrow prev"/>
            <AiOutlineArrowRight className="arrow next"/>

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