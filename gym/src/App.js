import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';


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
import List from './components/pages/list/list';
import Blogpost from './components/pages/blogpost/blogpost';
import Addblog from './components/pages/addblog/Addblog';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

        <Navbar/>


        <Route exact path="/" component={Home} />
        <Route path="/blog" component={List} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Blogpost/:blogId" component={Blogpost} />
        <Route path="/Addblog" component={Addblog} />




        <Footer/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

