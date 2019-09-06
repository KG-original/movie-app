import React, { Component } from 'react';
import MovieList from './MovieList';
import SortOptions from './SortOptions';

export class Landing extends Component {
    render() {
        return (
            <div style={landStyle} className="container">
                <MovieList/>
            </div>
        )
    }
}

const landStyle = {
    paddingTop: '85px'
}

export default Landing;
