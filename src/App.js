import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Murcheekee',
        info: 11,
        id: 'id0',
      },
      {
        name: 'Koteekee',
        info: 22,
        id: 'id1',
      },
      {
        name: 'Kotyamby',
        info: 33,
        id: 'id2',
      },
    ],
    name: 'Kek',
    info: 'top',
    showPersons: false,
  }
  deletePersonHandler = (i) => {
    const persons = this.state.persons;
    persons.splice(i, 1);
    this.setState({ persons });
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  };
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((elm) => elm.id === id);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, i) =>
            (
              <Person
                click={ () => this.deletePersonHandler(i) }
                changed={ (event) =>  this.changeNameHandler(event, person.id) }
                name={ person.name }
                info={ person.info }
                key={ person.id }>
                    And I am Myau :3
              </Person>
            ))
          }
          {/* <Person 
            name={ this.state.persons[0].name }
            info={ this.state.persons[0].info }>
                And I am Myau
          </Person>
          <Person 
            name={ this.state.persons[1].name }
            info={ this.state.persons[1].info }
            click={ this.switchNameHandler.bind(this, "Kotyamby!") }
            changed={ this.changeNameHandler } />
          <Person 
            name={ this.state.persons[2].name }
            info={ this.state.persons[2].info }>
                And I am :3
          </Person> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <button
          style={ styles }
          onClick={ this.togglePersonsHandler }>Toggle persons</button>
          { persons }
      </div>
    );
  }
}

export default App;
