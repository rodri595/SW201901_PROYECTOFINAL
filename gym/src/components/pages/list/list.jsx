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
        this.setState({blog:resp.data, isLoading:false})
      }).catch( (err) => {
        alert(err);
      });
  }

  render() {
    let ListItem = [];
    if(this.state.blog.length > 0 ){
      ListItem = this.state.blog.map((o, i)=>{
        return (<ListItem {...o} />);
      });
    }
    return (
      <div>
        <h2>
          Blog testing only {this.state.blog.length}
        </h2>
        <br/>
        <div>{ListItem}</div>
        { (this.state.isLoading)? "...cargando": null}

      </div>
    )
  }
}
export default list;