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
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <nav class="footer-nav">
                    <ul>
                        <li>
                            <a href="#" class="social-link">
                            <img src={twitter}/>
                            Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" class="social-link">
                            <img src={facebook}/>
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
