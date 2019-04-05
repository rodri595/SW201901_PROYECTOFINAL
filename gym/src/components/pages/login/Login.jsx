import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

//generic
import Header from '../../generic/header/Header';
import Body from '../../generic/body/Body';
import Input from '../../generic/input/Input';

export default class Login extends Component {
  constructor(){
    super();
    this.state = {
      "txtEmail":"",
      "txtPswd":""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  render() {
    if (this.state.redirecto && true){
      return (<Redirect to={this.props.location.state.from.pathname} />);
    }
    return (
      <div>
        <Header title="Login"/>
        <Body>
          <Input
              inputLabel="Correo Electrónico"
              inputName="txtEmail"
              inputType="email"
              inputPlaceholder="Correo Electróncio"
              inputValue={this.state.txtEmail}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <Input
              inputLabel="Contraseña"
              inputName="txtPswd"
              inputType="password"
              inputPlaceholder="Contraseña"
              inputValue={this.state.txtPswd}
              inputErrorMsg=""
              inputChangeHandler={this.onChangeHandler}
            />
            <button onClick={this.onClickHandler}>Login</button>
        </Body>
      </div>
    );
  }
  onChangeHandler(e){
    const {name, value} = e.currentTarget; //ES5 desctructor de objectos ||destructuring
    this.setState({...this.state, [name]:value});
  }
  onClickHandler(e){
    e.preventDefault();
    e.stopPropagation();

    axios.post(
      '/api/users/login',
      {"email": this.state.txtEmail, "password": this.state.txtPswd}
    ).then( (resp)=>{
      if(resp.data.msg === "ok"){
        this.props.auth.setAuthState(
          {
            "isAuthenticated": true,
            "user": this.state.txtEmail,
            "firstVerified": true
          }
        );
        this.setState({"redirecto": true});
      }
    }).catch( (err) => {
      alert(err);
    } );
  }
}
