import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <h1 className={this.props.classname || "clasic"}>{this.props.title||'No header'}
        </h1>
    )
  }
}
