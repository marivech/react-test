import React, { Component } from 'react';
import classes from'./App.css';
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
    let persons = null;
    let btnClass = '';

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
        </div>
      );
      btnClass = classes.Red;
    }

    const paragraphClasses = [];

    if (this.state.persons.length < 2) {
      paragraphClasses.push(classes.fewPersons)
    } else if (this.state.persons.length < 3) {
      paragraphClasses.push(classes.enoughPersons)
    }

      return (
          <div className={ classes.App } >
            <h1>Hi, I'm a react app!</h1>
            <p className={ paragraphClasses.join(' ') }>It's a test string</p>
            <button
              className= { btnClass }
              onClick={ this.togglePersonsHandler }>Toggle persons</button>
              { persons }
          </div>
    );
  }
}

export default App;
