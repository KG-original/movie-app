import React, { Component } from 'react';

export class MovieCard extends Component {

    render() {
        const {movie} = this.props;
        return (
            <div className="col-md-2 mb-6" style={cardStyle}>
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
    boxShadow:'1px 1px 1px 1px #000000',
    display: 'compact',
    background: '#000000',
    float: 'right',
    margin: '15px'
}
const pStyle = {
    color: '#777777',

}

const titleStyle = {
    color: '#ffffff',
    paddingTop: '10px'
}

const imgStyle = {
    width:'100%'
}


export default MovieCard;
