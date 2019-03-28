import React, { Component } from 'react';

//css
import './App.css';


//Components

// Generics
import Navbar from './components/generic/navbar/navbar'
import Footer from './components/generic/footer/Footer';


//Pages


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar/>
      <Footer/>
      </div>
    );
  }
}

export default App;
