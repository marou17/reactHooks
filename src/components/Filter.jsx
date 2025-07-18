import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import MovieDescription from "./MovieDescription";
import MovieList from "./MovieList";
import Filter from "./Filter";
import AddMovie from "./AddMovie";

import { moviesData } from "../data"; // fichier data.js avec la liste des films

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Mes films préférés</h1>
              <Filter
                titleFilter={titleFilter}
                onTitleChange={setTitleFilter}
                onRatingChange={setRatingFilter}
              />
              <MovieList movies={filteredMovies} />
              <AddMovie onAdd={addMovie} />
            </>
          }
        />
        <Route
          path="/movie/:id"
          element={<MovieDescription movies={movies} />}
        />
      </Routes>
    </div>
  );
}

export default App;