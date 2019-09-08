import React from 'react';
import './index.css';
import {Provider} from 'react-redux';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <MovieList/>
      <Footer/>
    </Provider>
  )
      
}

export default App;
