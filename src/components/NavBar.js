import React from 'react';
import SortOptions from './SortOptions';

function NavBar() {
    return (
          <nav style = {navStyle} className="navbar navbar-light navbar-fixed-top ">
            <div className="container">
              <div className="navbar-header">
                <div className="navbar-brand text-white brand-text" to="/">
                  <b>80's</b> Top 5 Movies
                </div>
              </div>
              <div style={sortStyle} className="navbar-nav ml-auto text-light d-inline-block"><SortOptions/></div>
            </div>
          </nav>    
    )
}

const navStyle = {
  position: 'fixed',
  zIndex: '100',
  width: '100%',
  background: '#ff4d4d',
  boxShadow:'0px 1px 1px #000000',

}

const sortStyle = {
  paddingBottom: '18px',
  paddingRight: '215px'

}

export default NavBar;

