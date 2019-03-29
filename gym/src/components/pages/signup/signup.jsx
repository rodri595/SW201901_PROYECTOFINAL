import React, { Component } from 'react';
//generic
import Header from '../../generic/header/Header';
import Body from '../../generic/body/Body';
import Input from '../../generic/input/Input';

export default class signin extends Component {
  constructor(){
    super();
    this.state = {
      "txtEmail":"",
      "txtPswd":""
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  render() {
    return (
      <div>
        <Header title="Registrate"/>
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
        </Body>
      </div>
    );
  }
  onChangeHandler(e){
    const {name, value} = e.currentTarget; //ES5 desctructor de objectos ||destructuring
    this.setState({...this.state, [name]:value});
  }
}
