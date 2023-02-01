import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { useState } from 'react'
import { Link } from 'react-scroll'

// Component to main header:
const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false
    const [menuOpened, setMenuOpened] = useState(false)


    return (
        <div className="header">

            <img src={Logo} alt="logo" className="logo" />

            {/* Conditional for burger-menu */}
            {(menuOpened === false && mobile === true
            ) ? (<div className="bar-menu" onClick={() => setMenuOpened(true)}>
                <img src={Bars} alt="bar-burger" style={{ width: '1.5rem', hight: '1.5rem' }} />
            </div>
            ) : (<ul className="header-menu">
                <li>
                    <Link  activeClaa="active" onClick={() => setMenuOpened(false)} to='home' span={true} smooth={true}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setMenuOpened(false)} to='programs' span={true} smooth={true}>
                        Programas
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setMenuOpened(false)} to='reasons' span={true} smooth={true}>
                        Sobre Nós
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setMenuOpened(false)} to='plans' span={true} smooth={true}>
                        Planos
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setMenuOpened(false)} to='testimonials' span={true} smooth={true}>
                        Depoimentos
                    </Link>
                </li>
            </ul>)}


        </div>
    )
}

export default Header