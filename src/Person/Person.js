import React from 'react';
import Radium from 'radium'
import './Person.css';

const person = (props) => {
    const styles = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    }
    return (
        <div className="Person" style={ styles }>
            <p onClick={ props.click }>I am { props.name } and I am { props.info }.</p>
            <p>{ props.children }</p>
            <input type="text" className="text" onChange={ props.changed } value={ props.name } />
        </div>   
    )
};

export default Radium(person);