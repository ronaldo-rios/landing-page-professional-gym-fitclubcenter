import './JoinUs.css';
import React from 'react'
// import emailjs from '@emailjs/browser'

const JoinUs = () => {


    return (
      <div className="join" id="join-us">
            <div className="left-j">

                <hr />
                <div>
                    <span className="stroke-text">Pronto para</span>
                    <span>mudar</span>
                </div>  
                <div>
                    <span>seu corpo</span>
                    <span className="stroke-text">com a gente?</span>
                </div>    
            </div>

            <div className="right-j">
                <form action="POST" className="email-container">
                    <input type="email" name="user-email" placeholder="Digite seu melhor E-mail" />
                    <button className="btn btn-j">Cadastrar</button>
                </form>
            </div>
      </div>
    );
  }
  
  export default JoinUs;