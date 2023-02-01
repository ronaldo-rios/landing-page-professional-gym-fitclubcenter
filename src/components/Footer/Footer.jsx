import './Footer.css';
import React from 'react'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="social-links">
                    <img src={Instagram} alt="instagram"></img>
                    <img src={LinkedIn} alt="linkedin"></img>
                </div>

                <div className="logo-f">
                    <img src={Logo} alt="logo" />
                </div>

                <div className="dev">
                    <span>Desenvolvido por <a href="https://ronaldorios.com.br">Ronaldo Rios Espíndola</a></span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
