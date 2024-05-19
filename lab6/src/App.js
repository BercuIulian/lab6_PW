import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import AddMovieForm from './components/AddMovieForm';
import Filter from './components/Filter';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem('movies');
    return savedMovies ? JSON.parse(savedMovies) : [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  const addMovie = (title) => {
    const newMovie = { id: Date.now(), title, likes: 0 };
    setMovies([...movies, newMovie]);
  };

  const likeMovie = (id) => {
    setMovies(movies.map(movie => 
      movie.id === id ? { ...movie, likes: movie.likes + 1 } : movie
    ));
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ThemeProvider>
      <div className="App">
        <h1>Movie Manager</h1>
        <ThemeToggle />
        <AddMovieForm onAdd={addMovie} />
        <Filter filter={filter} setFilter={setFilter} />
        <MovieList movies={filteredMovies} onLike={likeMovie} onDelete={deleteMovie} />
      </div>
    </ThemeProvider>
  );
};

export default App;
