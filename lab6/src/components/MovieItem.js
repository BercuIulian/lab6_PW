import React from 'react';

const MovieItem = ({ movie, onLike, onDelete }) => {
  return (
    <div>
      <h3>{movie.title}</h3>
      <button onClick={() => onLike(movie.id)}>Like ({movie.likes})</button>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </div>
  );
};

export default MovieItem;
