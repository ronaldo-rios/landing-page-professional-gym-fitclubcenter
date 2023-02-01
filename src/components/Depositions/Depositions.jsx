import React from 'react'
import './Depositions.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Depositions = () => {

    //variable for testimonial photo carousel:
    const [selected, setSelected] = useState(0)
    const tLength = testimonialsData.length

    return (
        <div className="depositions">

            <div className="left-t">
                <span>Depoimentos</span>
                <span className="stroke-text">O que eles </span>
                <span>dizem sobre nós</span>
                <span>
                    {testimonialsData[selected].review}
                </span>
                <span>
                    <span style={{color: 'rgb(173, 94, 247)'}}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                         - {testimonialsData[selected].status}
                </span>
            </div>
            <div className="right-t">

                <div></div>
                <div></div>
                <img src={testimonialsData[selected].image} alt="" />
                <div className="arrows">

                    <img onClick={() => {
                        selected===0 ? setSelected(tLength -1) : setSelected((prev) => prev -1) 
                    }} src={leftArrow} alt="leftArrow" />
                    
                    <img onClick={() => {
                        selected===tLength -1 ? setSelected(0) : setSelected((prev) => prev +1)
                    }} src={rightArrow} alt="rightArrow" />

                </div>

            </div>

        </div>
    );
}

export default Depositions;
