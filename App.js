import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
const word = "Hello";
const word = "TEST123-HELLOWORLD";


class App extends Component {
  render() {
    return (
      <div >
      <div className="App">

          
          <WordCard value={word}/>
      </div>
    );
  }
}
export default App;