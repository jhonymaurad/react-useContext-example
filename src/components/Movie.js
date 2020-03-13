import React from 'react';

const Movie = props => {
  const { name, price } = props.movie;
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Movie;
