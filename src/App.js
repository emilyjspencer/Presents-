import React, { Component } from 'react';

import Header from './components/Header';
import Present from './components/Present';

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

  removeItem = (id) => {
    const { presents } = this.state;
 
    const present_id = presents.filter(present => !present.id)
   
    const left = presents.splice(present_id, 1)
    console.log(`${left} has been printed`)
 
    
  }
  
  render() {
    return (
      <div className="App">
        <Header />
         
          <Present />
          <div className="presents">
            {
              this.state.presents.map(present => {
                return (
                  <div>
                  'added'
                  </div>
                )
              })
            }
          </div>
         
          <div className="buttons">
          <button className="add-item" onClick={this.addItem}>Add item</button>
          <br />
          <button className="remove-item" onClick={this.removeItem}>Remove item</button>
          </div>
      </div>
    );
  }
}

export default App;
