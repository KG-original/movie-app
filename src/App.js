import React from 'react';
import './index.css';
import {Provider} from 'react-redux';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import store from './store';



function App() {
  return (
    <Provider store={store}>
      <NavBar/>
      <Landing/>
      <Footer/>
    </Provider>
  )
      
}

export default App;
