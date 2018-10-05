import React, { Component } from 'react';
import './App.css';

import CharacterSelectDisplay from './components/CharacterSelectDisplay/CharacterSelectDisplay.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CharacterSelectDisplay />
      </div>
    );
  }
}

export default App;
