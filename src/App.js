import React from 'react';
import './App.css';

import { MovieProvider } from './MovieContext';

import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Nav from './components/Nav';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
