import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemons</h1>
        <Pokedex pokemons={pokemons} />
      </div>
    )
  }
}

export default App;
