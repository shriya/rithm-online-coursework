import React, { Component } from 'react';
import './App.css';
import CustomLink from './CustomLink'

class App extends Component {
  constructor(props) {
    super(props);
    this.disableClicks = this.disableClicks.bind(this);
  }

  disableClicks() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the Link App</h2>
        </div>
        <p className="App-intro">

          <button onClick={this.disableClicks}></button>

          <CustomLink href="https://www.google.com/" text="Google"></CustomLink>
          <CustomLink href="https://www.facebook.com/" text="Facebook"></CustomLink>
          <CustomLink href="https://twitter.com/" text="Twitter"></CustomLink>

        </p>
      </div>
    );
  }
}

export default App;
