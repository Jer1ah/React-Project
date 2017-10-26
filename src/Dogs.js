import React from 'react';
import Results from './Results.js';

// Build your app components according to the provided mockup.
// Most components should be stateless functional components that focus on the UI rather than behavior.You’ll need:

//A component for each category you wish to display.
// For example, a Sunset component, a Flowers component, and a Clouds component.


const Dogs = (props) => {
    return (
        <Results query={"dogs"} api={props.api} />
    );
}

export default Dogs;

