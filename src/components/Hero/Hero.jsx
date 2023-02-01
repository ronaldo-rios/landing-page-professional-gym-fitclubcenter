import React from 'react'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import Header from '../Header/Header'
import {motion} from 'framer-motion'

// First widget:
const Hero = () => {

    const transition = {type:'spring', duration:3}
    const mobile = window.innerWidth <= 768 ? true : false
    return (
        <div className="hero">

            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">

                    {/* div animated: */}
                    <motion.div 
                    initial={{left:mobile? "178px": "238px"}}
                    whileInView={{left:'9px'}}
                    transition={{...transition, type:'tween'}}
                    ></motion.div>

                    <span>O melhor club fitness para você</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Modele </span>
                        <span>Seu</span>
                    </div>
                    <div>
                        <span>Corpo Ideal</span>
                    </div>
                    <div>
                        <span>
                            Aqui vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo!
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>+140</span>
                        <span>Treinadores Especialistas</span>
                    </div>
                    <div>
                        <span>+978</span>
                        <span>Alunos</span>
                    </div>
                    <div>
                        <span>+50</span>
                        <span>Programas de Treinamento</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">CADASTRAR</button>
                    <button className="btn">SAIBA MAIS</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Cadastrar Agora</button>

                {/* div animated: */}
                <motion.div 
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={transition}
                className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>bpm</span>
                </motion.div>

                <img src={hero_image} alt="hero_img" className="hero-image" />
                {/* div animated: */}
                <motion.img 
                initial={{right:'11rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                src={hero_image_back} alt="hero_img_back" className="hero-image-back" />

                {/* div animated: */}
                <motion.div 
                initial={{right:'37rem'}}
                whileInView={{right:'28rem'}}
                transition={transition}
                className="calories">
                    <img src={Calories} alt="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero