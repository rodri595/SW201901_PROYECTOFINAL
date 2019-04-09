import React, { Component } from 'react'


//css
import './home-style.css';

//images
import banner from './images/banner.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';




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
                <div className="item">
                  <h1>LO MEJOR</h1>
                  <div><img src={img1} alt='extra del gym'/></div>
                </div>
                <div className="item">
                  <h1>lorem Ipsum</h1>
                </div>
                <div className="item">
                  <h1>Entrenadores</h1>
                  <div><img src={img2} alt='extra del gym'/></div>
                </div>   
            </div>	
            <section id="one" classname="wrapper style2">
				<div classname="inner">
					<div classname="grid-style">

						<div>
							<div classname="box">
								<div classname="image fit">
                <img src={img1} alt='extra del gym'/>
								</div>
								<div classname="content">
									<header classname="align-center">
										<p>maecenas sapien feugiat ex purus</p>
										<h2>Lorem ipsum dolor</h2>
									</header>
									<p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
									<footer classname="align-center">
										<a href="/" classname="button alt">Learn More</a>
									</footer>
								</div>
							</div>
						</div>

						<div>
							<div classname="box">
								<div classname="image fit">
                <img src={img2} alt='extra del gym'/>
								</div>
								<div classname="content">
									<header classname="align-center">
										<p>mattis elementum sapien pretium tellus</p>
										<h2>Vestibulum sit amet</h2>
									</header>
									<p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
									<footer classname="align-center">
										<a href="/" classname="button alt">Learn More</a>
									</footer>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>

            



        </nav>
    )
  }
}
