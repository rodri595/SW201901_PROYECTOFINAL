import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//CSS
import './list.css';



function ListItem(props){
  return(
    <div key={props._id}>
      <b>
      <Link to={`/Blogpost/${props._id}`}>{props.Title}</Link>
      </b>
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
        <div>{ListItems}</div>
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