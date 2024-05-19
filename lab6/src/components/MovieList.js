import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies, onLike, onDelete }) => {
  return (
    <div>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} onLike={onLike} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default MovieList;
