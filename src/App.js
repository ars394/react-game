import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
//import Player from './features/player'
//import { render } from 'node-sass';
import World from './features/world'


class App extends Component {
  render() {
    return (
      <div> 
        <World />
      </div>
    );
  }
  
}

export default App;
