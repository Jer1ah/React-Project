
import React from 'react';
import Results from './Results.js';


const Computers = (props) => {
    return (
        <Results query={"computers"} api={props.api} />
    );
}

export default Computers;