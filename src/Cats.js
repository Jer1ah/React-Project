import React from 'react';
import Results from './Results.js';


const Cats = (props) => {
    return(
        <Results query={"cats"} api={props.api} />
    );
}

export default Cats;