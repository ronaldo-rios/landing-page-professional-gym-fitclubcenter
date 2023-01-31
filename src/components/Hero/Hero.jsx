import React from 'react'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import Header from '../Header/Header'


const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <div></div>
                    <span>O melhor club fitness da cidade</span>
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

                <div className="heart-rate">
                    <img src={Heart} alt="heart" />
                    <span>Heart Rate</span>
                    <span>bpm</span>
                </div>

                <img src={hero_image} alt="hero_img" className="hero-image" />
                <img src={hero_image_back} alt="hero_img_back" className="hero-image-back" />

                <div className="calories">
                    <img src={Calories} alt="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero