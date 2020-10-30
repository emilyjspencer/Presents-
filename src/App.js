import React, { Component } from 'react';

import Header from './components/Header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props) 
      this.state = { presents: []  }
  };

  addItem = ( id ) => {
 const { presents } = this.state;
 const present_ids = this.state.presents.map(present => present.id);

 const max_id = present_ids.length > 0? Math.max(...present_ids) : 0;
  presents.push({ id: max_id + 1 });
  this.setState({ presents });

  };
  
  render() {
    return (
      <div className="App">
        <Header />
          <h1>Testing</h1>
          <button className="add-item" onClick={this.addItem}>Add item</button>
      </div>
    );
  }
}

export default App;
