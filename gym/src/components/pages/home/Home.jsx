import React, { Component } from 'react'


//css
import './home-style.css';

//images
import banner from './images/banner.jpg'




export default class Home extends Component {
  render() {
    return (
        <nav id="home">
            <section classname="banner">
            <img className="banner" src={banner} alt='banner del gym'/>
                    <div className="text-inner-container">
                        <h1>CROSSFIT</h1>
                        <h3>Tegus Training Center</h3>       
                    </div>
               
            </section>
            <div className="flex-container">
                <div className="item"><h1>nepe 1</h1></div>
                <div className="item"><h1>nepe 1</h1></div>
                <div className="item"><h1>nepe 1</h1></div>   
            </div>


        </nav>
    )
  }
}
