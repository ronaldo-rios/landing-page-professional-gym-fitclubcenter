import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

// Component to main header:
const Header = () => {
    return (
        <div className="header">

            <img src={Logo} alt="logo" className="logo" />

            <ul className="header-menu">
                <li>Home</li>
                <li>Programas</li>
                <li>Sobre Nós</li>
                <li>Planos</li>
                <li>Depoimentos</li>
            </ul>

        </div>
    )
}

export default Header