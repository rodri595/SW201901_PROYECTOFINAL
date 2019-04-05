import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


//CSS
import './blogpost-style.css';



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
    let blogId=this.props.match.params.itemid;
    let itemBody = null;


    if(this.state.blogPost){
      let {Title, Post, user} = this.state.blogPost;
      itemBody = (
        <div>
          <h1>{blogId}</h1>
          <b>{Title}</b><br />
          <b>{Post}</b><br />
          <b>{user}</b><br />
        </div>
      );
    }



    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <h1>
            {itemBody}
        </h1>
      


      <button><Link to="/Blog">Regresar</Link></button>
        </div>
    );
  }
}
