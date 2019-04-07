import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';


//css
import './App.css';


//Components

// Generics
import Navbar from './components/generic/navbar/navbar';
import Footer from './components/generic/footer/Footer';
import PrivateRoute from './components/generic/privateroute/PrivateRoute'
import logout from './components/generic/logout/logout';



//Pages
import Login from './components/pages/login/Login';
import Signup from './components/pages/signup/signup';
import Home from './components/pages/home/Home';
import List from './components/pages/list/list';
import Blogpost from './components/pages/blogpost/blogpost';
import Addblog from './components/pages/addblog/Addblog';




class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated : false,
      user: null,
      firsVerified: false
    }
    this.setAuthState = this.setAuthState.bind(this);
  }
  setAuthState(authProps){
    this.setState(authProps);
  }
  render() {
    return (
      <BrowserRouter>
        <div>

        <Navbar/>


        <Route exact path="/" component={Home} />
        <Route path="/" component={logout} />
        <Route path="/blog" component={List} />
        <Route path="/Login"render={(p)=>(<Login {...p} auth={{...this.state, setAuthState:this.setAuthState}}/>)}  />
        <Route path="/Signup" component={Signup}  />
        <Route path="/Blogpost/:blogId" component={Blogpost} />
        <PrivateRoute path="/Addblog" component={Addblog} auth={this.state} />




        <Footer/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

