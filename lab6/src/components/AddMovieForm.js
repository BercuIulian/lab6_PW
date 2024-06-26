import React, { useState } from 'react';

const AddMovieForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a movie"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddMovieForm;
