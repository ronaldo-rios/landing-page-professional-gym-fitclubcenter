import React from 'react'
import './Plans.css';
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container">

          <div className="blur plans-blur-1"></div>
          <div className="blur plans-blur-2"></div>
          <div className="programs-header" style={{gap:'2rem'}}>
                <span className="stroke-text">PRONTO PARA COMEÇAR</span>
                <span>SUA JORNADA</span>
                <span className="stroke-text">AGORA COM A GENTE?</span>
          </div>
          <div className="plans">
            {plansData.map((plan, i) => (

                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>R$ {plan.price}</span>

                    <div className="features">
                        {plan.features.map((feat, i) => (
                            <div className="feature">
                                <img src={whiteTick} alt="whitetick" />
                                <span key={i}>{feat}</span>
                            </div>
                        ))}
                    </div>

                    <div><span>Ver mais Benefícios</span></div>
                    <button className="btn">Cadastrar</button>

                </div>

            ))}
          </div>

    </div>
  );
}

export default Plans;
