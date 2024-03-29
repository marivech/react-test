import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={ classes.Person }>
            <p onClick={ props.click }>I am { props.name } and I am { props.info }.</p>
            <p>{ props.children }</p>
            <input type="text" className="text" onChange={ props.changed } value={ props.name } />
        </div>   
    )
};

export default person;