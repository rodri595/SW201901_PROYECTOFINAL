import React, { Component } from 'react';
import axios from 'axios';
//generic
import Header from '../../generic/header/Header';
import Body from '../../generic/body/Body';
import Input from '../../generic/input/Input';

export default class signin extends Component {
  constructor(){
    super();
    this.state = {
      "txtUser":"",
      "txtName":"",
      "txtLastname":"",
      "txtEmail":"",
      "txtPswd":""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  render() {
    let finish = null;

    return (
      <div>
        <Header title="Registrate"/>
        <Body>
          <Input
            inputLabel="Usuario"
            inputName="txtUser"
            inputType="text"
            inputPlaceholder="Usuario"
            inputValue={this.state.txtUser}
            inputErrorMsg=""
            inputChangeHandler={this.onChangeHandler}
          />
          <Input
            inputLabel="Nombre"
            inputName="txtName"
            inputType="text"
            inputPlaceholder="Nombre"
            inputValue={this.state.txtName}
            inputErrorMsg=""
            inputChangeHandler={this.onChangeHandler}
          />
          <Input
            inputLabel="Apellido"
            inputName="txtLastname"
            inputType="text"
            inputPlaceholder="Apellido"
            inputValue={this.state.txtLastname}
            inputErrorMsg=""
            inputChangeHandler={this.onChangeHandler}
          />
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
          <button onClick={this.onClickHandler}>Signup</button>
        </Body>
      </div>
    );
  }
  onChangeHandler(e){
    const {name, value} = e.currentTarget; //ES5 desctructor de objectos 
    this.setState({...this.state, [name]:value});
  }
  onClickHandler(e){
    e.preventDefault();
    e.stopPropagation();

    axios.post(
      '/api/users/new',
      {"user": this.state.txtUser, 
      "name": this.state.txtName, 
      "lastname": this.state.txtLastname, 
      "email": this.state.txtEmail, 
      "password": this.state.txtPswd}
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
        this.props.history.push("/");

      }
    }).catch( (err) => {
      alert(err);
    } );
  }
}
