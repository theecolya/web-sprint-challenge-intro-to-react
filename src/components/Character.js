// Write your Character component here
import React from 'react';

const Character = (props) => {

    const nameArr = props.list.map(item => item.name);
    const listNames = nameArr.map((item) => {
       return <p>{item}</p>
    });
    return (
        <div>{listNames}</div>
    );
}

export default Character;