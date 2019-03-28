import React, { Component } from 'react'

//css
import './navbar.css';

//images
import logo from './images/logo.png';

export default class navbar extends Component {
  render() {
    return (
        <div>
            <body>
                <nav className="navbar">
                    <div className="brand-title"><a href="/"><img src={logo} alt='logo del gym'/></a></div>
                        <a href="#" className="toggle-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </a>
                        <div className="navbar-links">
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Horarios</a></li>
                                <li><a href="#">Nosotros</a></li>
                                <li><a href="#">Contactanos</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Registrar</a></li>
                            </ul>
                        </div>
                </nav>
            </body>
        </div>
    )
  }
}


