import React from 'react';

class Movie extends React.Component {

    render() {
        this.movie = JSON.parse(window.sessionStorage.getItem('currentMovie'));
        return (
            <div className="container" style={modalStyle} >
                <img style={imageStyle} src={this.movie ? this.movie.imageUrl : ''} key={this.movie ? this.movie.id : null}/>
                <div style={content} >
                    <h1>{this.movie ? this.movie.title : ''}</h1>
                    <h5>{this.movie ? this.movie.releaseDate : ''}</h5>
                    <p>{this.movie ? this.movie.synopsis : ''}</p>
                </div>
            </div>
        )
    }
}

const modalStyle = {
    backgroundRepeat: 'no-repeat',
    background: '#000000',
    position: 'relative',
    color: '#ffffff'
}

const content = {
    position: 'absolute',
    fontFamily: 'Arial',
    fontAize: '17px',
    bottom: 0,
    top: 0,
    textAlign: 'center',
    background: 'rgb(0, 0, 0)',
    background: 'rgba(0, 0, 0, .6)',
    color: '#f1f1f1',
    padding: '10px',
    paddingTop: '50px'
}

const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    flex: 1,
    resizeMode: 'cover',
    zIndex: '100'
}

export default Movie;