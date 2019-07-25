import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
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
  });

  console.log(personsState)
  const switchNameHandler = () => {
    setPersonsState({
      name: personsState.persons[1].name,
      info: personsState.persons[1].info,
    })
  }
  return (
    <div className="App">
      <h1>Hi, I'm a react app!</h1>
      <button onClick={ switchNameHandler }>Switch name</button>
      <Person name={ personsState.name } className="highlight" info={personsState.info}>And I am Myau</Person>
    </div>
  );
}


export default app;
