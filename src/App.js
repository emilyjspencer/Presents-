import React, { Component } from 'react';

import Header from './components/Header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props) 
      this.state = { presents: []  }
  };
  
  render() {
    return (
      <div className="App">
        <Header />
          <h1>Testing</h1>
      </div>
    );
  }
}

export default App;
