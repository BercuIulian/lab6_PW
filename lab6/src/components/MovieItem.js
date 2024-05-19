import React from 'react';

const MovieItem = ({ movie, onLike, onDelete }) => {
  return (
    <div className="movie-item">
      <h3>{movie.title}</h3>
      <div>
        <button onClick={() => onLike(movie.id)}>Like ({movie.likes})</button>
        <button onClick={() => onDelete(movie.id)}>Delete</button>
      </div>
    </div>
  );
};

export default MovieItem;
