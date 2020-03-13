import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: 'Harry Potter', price: '$10', id: '1345' },
    { name: 'Terminator', price: '$20', id: '2045' },
    { name: 'Lord of the rings', price: '$50', id: '0305' }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
