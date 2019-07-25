import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Murcheekee',
        info: 11,
      },
      {
        name: 'Koteekee',
        info: 22,
      },
      {
        name: 'Kotyamby',
        info: 33,
      },
    ],
    name: 'Kek',
    info: 'top',
  }
  switchNameHandler = (newName) => {
    this.setState({
      name: newName,
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  };
  render() {
    const styles = {
      backgroundColor: 'tomato',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '12px',
      cursor: 'pointer',
      color: 'white',
    };
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button
          style={ styles }
          onClick={() => this.switchNameHandler('Kotyaktee') }>Switch name</button>
        <Person 
          name={ this.state.name } 
          info={ this.state.info }>
              And I am Myau
        </Person>
        <Person 
          name={ this.state.name }
          info={ this.state.info }
          click={ this.switchNameHandler.bind(this, "Kotyamby!") }
          changed={ this.changeNameHandler } />
      </div>
    );
  }
}

export default App;
