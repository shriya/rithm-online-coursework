import React, { Component } from 'react';
import './Box.css';

export default class Box extends Component {
  render() {
    // console.log("I'm a Box! My color is " + this.props.color);
    const style = {
      backgroundColor: this.props.color
    };
    return (
      <div className='box' style={style}>
        <button className='new' onClick={this.props.handleColor}>New Color</button>
        <button className='delete' onClick={this.props.handleRemove}>X</button>
      </div>
    )
  }
}