import React from 'react';

const person = (props) =>{
    //return <p>I'm a Person and I am {Math.floor(Math.random() * 30)}</p>
    //return <p>I'm {props.name} and I am {props.age}</p>
    return(
        <div>
             <p>I'm {props.name} and I am {props.age}</p>
             <p>{props.children}</p>
        </div>
    )

};

export default person;