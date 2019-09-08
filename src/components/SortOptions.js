import React, { Component } from 'react';
import {connect} from 'react-redux';
import {refreshList} from './MovieList';
import ReactDOM from 'react-dom';

export class SortOptions extends Component {
    constructor(props){
        super(props);
    }

     orderBy = (valueToOrderBy, label) => {
         this.movies = window.sessionStorage.getItem('Movies') ? JSON.parse(window.sessionStorage.getItem('Movies')) : [];
         this.selectedOrder = label;
         //this.render();
         
         if(valueToOrderBy == 'rank'){
            this.movies.movies.sort(function(a, b){
                return a.rank-b.rank
            })
         }
         if(valueToOrderBy == 'releaseDate'){
            this.movies.movies.sort(function(a, b){
                return b.releaseDate-a.releaseDate
            })
         }
         this.setState({
            movies : this.movies
         })
        window.sessionStorage.setItem('Movies', JSON.stringify(this.movies));
        window.sessionStorage.setItem('CurrentOrder', label);
        refreshList(this.props);
    }

    render() {
        this.orderTypes = window.sessionStorage.getItem('OrderTypes') ? JSON.parse(window.sessionStorage.getItem('OrderTypes')) : [];
        this.selectedOrder = this.selectedOrder ? this.selectedOrder : window.sessionStorage.getItem('CurrentOrder');
        let content = this.orderTypes.map((type,key) =>
                <div onClick={() => this.orderBy(type.valueToOrderBy, type.label)} className="dropdown-item" key={key}>{type.label}</div>
            );
        return (
            <div id= "ordertypes" style={dropConatiner} className="dropdown-container">
                <div style={sortStyle} className="dropdown">
                    <div className="dropdown-toggle" data-toggle="dropdown">Order By {this.selectedOrder}</div>
                    <div className="dropdown-menu">
                    {content}
                    </div>
                </div>
            </div>
        )
    }
}


const sortStyle = {
    position:'absolute'
}

const dropConatiner = {
    position:'relative',
    cursor: 'pointer'
}

export function refreshSortOptions(props){
    ReactDOM.render(<SortOptions />, document.getElementById("ordertypes"));
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

 export default connect(mapStateToProps)(SortOptions);

