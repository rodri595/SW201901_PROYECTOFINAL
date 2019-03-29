import React, { Component } from 'react';

//css
import './footer.css';

//Images
import twitter from './images/twitter.svg';
import facebook from './images/facebook.svg';

export default class Footer extends Component {
  render() {
    return (
    <div>
        <footer class="main-footer">
            <div class="container">
                <nav class="footer-nav">
                    <ul>
                    <li><a href="/">Premios</a></li>
                    <li><a href="/">Certificados</a></li>
                    </ul>
                </nav>
                <nav class="footer-nav">
                    <ul>
                        <li>
                            <a href="/" class="social-link">
                            <img src={twitter} alt="twitter logo"/>
                            Twitter
                            </a>
                        </li>
                        <li>
                            <a href="/" class="social-link">
                            <img src={facebook} alt="facebook logo"/>
                            Facebook
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
        
    </div>
    )
  }
}
