import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//css
import './navbar.css';

//images
import logo from './images/logo.png';


export default class navbar extends Component {
  render() {
    return (
        <div id="navbar">
            <body>
                <nav className="navbar">
                    <div className="brand-title"><img src={logo} alt='logo del gym'/></div>
                        <div className="toggle-button">
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <div className="navbar-links">
                            <ul>
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/">Horarios</Link></li>
                                <li><Link to="/">Nosotros</Link></li>
                                <li><Link to="/Blog">Blog</Link></li>
                                <li><Link to="/Login">Login</Link></li>
                                <li><Link to="/Signup">Registrar</Link></li>
                            </ul>
                        </div>
                </nav>
            </body>
        </div>
    )
  }
}


