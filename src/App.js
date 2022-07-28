import React, { Component } from 'react';
import './App.css';
import Details from './Details'
import Films from './Films'
import TMDB from './TMDB'

class App extends Component {
  render() {
    return ( 
      <>
      <Films films={TMDB.films}/>
      <Details films={TMDB.films}/>
      </>
    )
  }
}

export default App;