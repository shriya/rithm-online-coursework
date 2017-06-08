import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex.js';
import Pokecard from './Pokecard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex>
          <Pokecard></Pokecard>
          <Pokecard></Pokecard>
          <Pokecard></Pokecard>
          <Pokecard></Pokecard>
          <Pokecard></Pokecard>
        </Pokedex>
      </div>
    );
  }
}

export default App;
