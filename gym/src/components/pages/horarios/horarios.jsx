import React, { Component } from 'react';


//css
import './horario-style.css';

//images
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'

export default class horarios extends Component {
  render() {
    return (
      <div>

<div className="flex-container4">
                <div className="item4">
                  <h1>john doe</h1>
                  <div><img src={img1} alt='extra del gym'/></div>
                </div>
                <div className="item4">
                  <h1>jena doe</h1>
                  <div><img src={img2} alt='extra del gym'/></div>
                </div>   
            </div>	

<section classname="table-container">
<img src={img3} alt='extra del gym'/>

</section>
</div>
        
  
    )
  }
}
