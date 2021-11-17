import React from 'react';

/**
 * @function HomeHeroTitle
 * @summary Home Hero Title component
 * @description Show the title and subtitle for the home hero component.
 * @returns { JSX }
 */
const HomeHeroTitle = () => {
    return (
        <React.Fragment>
            <h1 className="title is-1 is-spaced">Jeremy Trpka</h1>
            
            <h3 className="subtitle is-3">"I type stuff and magic happens."</h3>
        </React.Fragment>
    );
};

export default HomeHeroTitle;