import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import { moviesData } from "./data"; // ton fichier data.js
import "./App.css";
function App() {
  const [movies, setMovies] = useState(moviesData); // liste des films
  const [titleFilter, setTitleFilter] = useState(""); // filtre titre
  const [ratingFilter, setRatingFilter] = useState(0); // filtre note

  // Fonction pour ajouter un film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Liste filtrée
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="App">
      <h1>🎬 Mes films préférés</h1>
      <Filter
        titleFilter={titleFilter}
        onTitleChange={setTitleFilter}
        onRatingChange={setRatingFilter}
      />
      <MovieList movies={filteredMovies} />
      <AddMovie onAdd={addMovie} />
    </div>
  );
}

export default App;