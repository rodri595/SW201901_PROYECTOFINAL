import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


//Components
//Generics
import Body from '../../generic/body/Body';
import Input from '../../generic/input/Input';

//css
import '../home/home-style.css';

import img1 from '../list/images/img5.jpg';




export default class Addblog extends Component {
    constructor(){
        super();
        this.state = {
          txtTitle:"",
          txtTitleError:"",
          txtPost:"",
          txtPostError:"",
          txtUser:"",
          txtUserError:"",
          redirectTo:"",
          error:""
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onBlurHandler = this.onBlurHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    onChangeHandler(e){
        let {name, value} = e.currentTarget;
        this.setState({[name]:value});
    }
    onBlurHandler(e){
      let { name, value } = e.currentTarget;
    }
    onClickHandler(e){
      e.preventDefault();
      e.stopPropagation();
      axios.post(
          `api/blog/new`,
          {
            Title:this.state.txtTitle,
            Post:this.state.txtPost,
            user:this.state.txtUser,
          }
        ).then(
          (resp)=>{
            this.setState({ redirectTo:"/blog"});
          }
        )
        .catch(
          (err)=>{
            this.setState({error:err});
          }
        );
    }
  render() {
    if(this.state.redirectTo!==""){
        return (
          <div>
            <Link to={this.state.redirectTo}>Blogpost Agregado Satisfactoriamente</Link>
          </div>
        )
      }
    return (
      <div classname="flex-container">
      <div classname="item">
        <img classname="img-container1" src={img1} alt='extra del gym'/>
          <h1>creando tu nuevo Blogpost</h1>
          <button><Link to="/Blog">Regresar</Link></button>
        <Body>
          <Input
              inputLabel        ="Titulo de Blog"
              inputName         ="txtTitle"
              inputType         ="text"
              inputPlaceholder  ="Titulo para tu blogpost"
              inputValue        ={this.state.txtTitle||null}
              inputErrorMsg     ={this.state.txtTitleError||null}
              inputChangeHandler={this.onChangeHandler}
              inputBlurHandler  ={this.onBlurHandler}
          />
          <Input
            inputLabel="Post"
            inputName="txtPost"
            inputType="text"
            inputPlaceholder="Body del Post"
            inputValue={this.state.txtPost || null}
            inputErrorMsg={this.state.txtPostError || null}
            inputChangeHandler={this.onChangeHandler}
            inputBlurHandler={this.onBlurHandler}
          />
          <Input
            inputLabel        ="autor"
            inputName         ="txtUser"
            inputType         ="text"
            inputPlaceholder  ="Autor para tu blogpost"
            inputValue        ={this.state.txtUser||null}
            inputErrorMsg     ={this.state.txtUserError||null}
            inputChangeHandler={this.onChangeHandler}
            inputBlurHandler  ={this.onBlurHandler}
          />
          <button onClick={this.onClickHandler}>Agregar</button>
          <div>
            {this.state.error}
          </div>
        </Body>
        </div>
      </div>
    );
  }
}
