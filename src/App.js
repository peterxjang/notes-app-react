import React, { Component } from 'react';
import Toolbar from './components/Toolbar'
import NoteContainer from './components/NoteContainer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {id: 1, body: "This is a first test", timestamp: Date.now()},
        {id: 2, body: "This is a second test", timestamp: Date.now()},
        {id: 3, body: "This is a third test", timestamp: Date.now()}
      ]
    }
  }
  
  render() {
    return (
      <div id="app">
        <Toolbar />
        <NoteContainer notes={this.state.notes} />
      </div>      
    );
  }
}

export default App;
