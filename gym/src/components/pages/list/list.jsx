import React, { Component } from 'react';
import axios from 'axios';

//CSS
import './list.css';

export default class list extends Component {
  constructor(){
    super();
    this.state ={
      blog:[],
      isLoading: false,
      error: false,
    }
  }
  componentDidMount(){

  }
  render() {
    return (
      <div>
        <h2>
          Blog testing only{this.state.blog.length}
        </h2>
        { (this.state.isLoading)? "...cargando": null}
        
      </div>
    )
  }
}
