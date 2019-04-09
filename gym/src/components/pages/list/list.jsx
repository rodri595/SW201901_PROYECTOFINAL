import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//CSS
import './list.css';

//images

import img1 from './images/img1.jpg'



function ListItem(props){
  return(
    
  <div classname="flex-container3">

    <div key={props._id}>
    <div className="item3">
        <div className="img-container3">
        <img src={img1} alt='extra del gym'/>
        </div>
        <b>
          TITLE : <Link to={`/Blogpost/${props._id}`}>{props.Title}</Link>
        </b>
        <p>
          -POST-<br/> 
          {props.Post}
        </p>
        <h4>
          Creado por : <br/> 
          {props.user}
        </h4>
        <button><Link to={`/Blogpost/${props._id}`}>Leer Mas</Link></button>
      </div>
    </div>
 

    </div>
  );
}

class list extends Component {
  constructor(){
    super();
    this.state ={
      blog:[],
      isLoading: false,
      error: false,
    }
  }
  componentDidMount(){
    this.setState({isLoading:true});
    axios.get('/api/blog')
      .then( (resp)=>{
        this.setState({blog:resp.data, isLoading:false});
      })
      .catch( (err) => {
        alert(err);
      });
  }

  render() {
    let ListItems = [];
    if(this.state.blog.length > 0 ){
      ListItems = this.state.blog.map((o, i)=>{
        return (<ListItem {...o} />);
      });
    }
    return (
      <div>
        <h2>
          Blog testing only {this.state.blog.length}
        </h2>
        <br/>
        <div classname="felx-container item">
        <div>{ListItems}</div>
        </div>
        { (this.state.isLoading)? "...cargando": null}

        <br/>
        <br/>
        <br/>
        <Link to="/Addblog">Crear Post Nuevo</Link>
      </div>
    )
  }
}
export default list;