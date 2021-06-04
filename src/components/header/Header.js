//Header 

import React, {useContext} from 'react'
//importamos el logo
import Logo from '../../img/logo.svg'
import './header.css'

function Header() {

    return (
        <header>

            <img className='logo' src={Logo}></img>
            <i  
                className="fas fa-bars nav-btn" id='nav-btn'
            ></i>
            <ul className='nav'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>
            <div className="login-container">
                <p>Login</p>
                <button>Sign up</button>
            </div>
        </header>
    )
}

export default Header
