import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
      console.log(e)
      alert(`SHAME ON YOU!!!!`);
  }

  render() {
    return (
      <div>
        <button 
          onClick={this.handleClick}
          className="button"
        />
      </div>
    )
  }
}

export default Button;
