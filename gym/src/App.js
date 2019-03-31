import React, { Component } from 'react';

//css
import './App.css';


//Components

// Generics
import Navbar from './components/generic/navbar/navbar';
import Footer from './components/generic/footer/Footer';


//Pages
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/signup';
import Home from './components/pages/home/Home';


class App extends Component {
  render() {
    return (
      <div>

      <Navbar/>



      <Home/>



      <Footer/>

      </div>
    );
  }
}

export default App;


// <Navbar/>
// <Home/>
// <Login />
// <Signup />
// <Footer/>