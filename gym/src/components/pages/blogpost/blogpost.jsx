import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


//CSS
import './blogpost-style.css';

import img1 from '../list/images/img2.jpg'



export default class blogpost extends Component {
  constructor(){
    super();
    this.state = {
      blogPost: null,
      isLoading: false,
      hasErrors: false
    }
  }
  componentDidMount(){
    let {blogId} = this.props.match.params;
    axios.get(`/api/blog/byid/${blogId}`)
      .then((resp)=>{
        this.setState({blogPost: resp.data, isLoading:false, hasErrors:false});
      })
      .catch((err)=>{
        this.setState({blogPost:null, isLoading:false, hasErrors:err});
      })
  }
  render() {
    
    let itemBody = null;


    if(this.state.blogPost){
      let {_id, Title, Post, user} = this.state.blogPost;
      itemBody = (
        <div className="flex-container2">
        <div className="item2">

          <div classname="cod-container">
          codigo de post:<br/>
            <h5>{_id}</h5>
          </div>


          <div classname="img-container2">
            <img src={img1} alt='extra del gym'/>
          </div>

          <div classname="title-container">
              Titulo:
            <b>
              {Title}
            </b>
            <br /><br />
          </div>

          
          <div classname="post-container">
            <b>
              {Post}
            </b>
              <br />
            <b>
            <br /><br />
              creador por : 
              <br />
              "{user}"
            </b>
            
            <br />
          </div>
          </div>
        </div>
      );
    }



    return (
        <div>
            <br/>
            <br/>
            <br/>

      <button><Link to="/Blog">Regresar</Link></button>
            <br/>
        <h1>
            {itemBody}
        </h1>
      


        </div>
    );
  }
}
