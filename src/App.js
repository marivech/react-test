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
  switchNameHandler = () => {
    this.setState({
      name: this.state.persons[1].name,
      info: this.state.persons[1].info,
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button onClick={ this.switchNameHandler }>Switch name</button>
        <Person name={ this.state.name } className="highlight" info={this.state.info}>And I am Myau</Person>
      </div>
    );
  }
}

export default App;
