import React, { Component } from 'react';
import fetchMovies from '../actions/fetchAction';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';
import ReactDOM from 'react-dom';
import { refreshSortOptions } from './SortOptions'

// include styles
import 'rodal/lib/rodal.css';

export class MovieList extends Component {
    constructor(props){
        super(props)
        if(!window.sessionStorage.getItem('Movies')) fetchMovies(this.props.dispatch);
        this.state = { visible: false };
    }

    show(movie) {
        this.setState({ visible: true });
        window.sessionStorage.setItem('currentMovie', JSON.stringify(movie));
    }

    hide() {
        this.setState({ visible: false });
    }  

    render() {
        const movies = window.sessionStorage.getItem('Movies') ? JSON.parse(window.sessionStorage.getItem('Movies')) : this.props.movies; 
        if(!window.sessionStorage.getItem('Movies')  && movies.movies) window.sessionStorage.setItem('Movies', JSON.stringify(movies));
        if(!window.sessionStorage.getItem('OrderTypes') && movies.movies ){
            window.sessionStorage.setItem('OrderTypes', JSON.stringify(movies.ordertypes));
            refreshSortOptions(this.props);
        } 
        let content = '';
        if (movies.movies)
            content = movies.movies.length > 0 ? movies.movies.map((movie, index) => <MovieCard key={index} movie={movie}/>) : null;
        else
            content = movies.length > 0 ? movies.map((movie, index) =>  <div ><MovieCard key={index} movie={movie}/></div>) : null;
        return (
            <div style={listStyle} id= "movielist" className="container">
                {content}
            </div>
             
        )
    }
}

const listStyle = {
    paddingTop: '85px',
}

export function refreshList(props){
    ReactDOM.render(<MovieList />, document.getElementById("movielist"));
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MovieList);


