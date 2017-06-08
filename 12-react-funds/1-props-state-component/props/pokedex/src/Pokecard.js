import React, {Component} from 'react'
import './Pokecard.css';
import PropTypes from 'prop-types';

export default class Pokecard extends Component {
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
      <div className="pokecard" key={this.props.id}>
        <h3>{this.props.name}</h3>
        <img src={this.props.image} alt="{this.props.name}"/>
        <p>type: {this.props.type}</p>
      </div>
    );
  }
}

Pokecard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string
};
