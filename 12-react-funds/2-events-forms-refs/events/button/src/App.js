import React, { Component } from 'react';
import './App.css';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>DON'T PRESS THE BUTTON!</h1>
        </div>
        <Button />
      </div>
    );
  }
}

export default App;

