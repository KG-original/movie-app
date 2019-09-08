import React, { Component } from 'react';
import Movie from './Movie';
import Rodal from 'rodal';

export class MovieCard extends Component {

    constructor(props){
        super(props)
        this.state = { visible: false };
    }

    show(movie) {
        this.setState({ visible: true });
        window.sessionStorage.setItem('currentMovie', JSON.stringify(movie));
    }

    hide(e) {
        this.setState({ visible: false });
        e.stopPropagation();
    }

    render() {
        const {movie} = this.props;
        return (
            <div  onClick={() => this.show(movie)} className="col-md-2 mb-6" style={cardStyle}>
                <Rodal visible={this.state.visible} onClose={(e) => this.hide(e)}>
                    <Movie/>
                </Rodal>
                <div style={circleDiv}>
                    <p style={circle}>{movie.rank}</p>
                </div>
                <img style={imgStyle} className="w-100" src={movie.imageUrl} alt="Movie Cover"/>
                <h6 style={titleStyle}>
                    {movie.title}
                </h6>
                <p style={pStyle}>{movie.releaseDate}</p>
            </div>
            
        )
    }
}

const cardStyle = {
    cursor: 'pointer',
    boxShadow: '0px -1px 25px 5px rgba(165,165,165,0.22)',
    display: 'compact',
    background: '#000000',
    float: 'left',
    margin: '15px',
    borderRadius: '5px',
    width:'100%',
}
const pStyle = {
    color: '#777777',
    fontFamily: 'Arial',
    textAlign: 'center', 
    fontSize: '1em'
}

const titleStyle = {
    color: '#ffffff',
    paddingTop: '10px',
    textAlign: 'center'
}

const circleDiv = {
    textAlign: 'center'
}

const circle = {
    fontSize: '1em',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    color: 'grey',
    background: '#FFA500',
    borderRadius: '50%',
    height: '1.7em',
    width: '1.7em',
    position: 'absolute', /* Reposition logo from the natural layout */
    left: '2px'
}

const imgStyle = {
    width:'100%'
}


export default MovieCard;
