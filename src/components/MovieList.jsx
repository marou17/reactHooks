import React from "react";
import MovieCard from './ MovieCard'

function MovieList({ movies }) {
  return (
    <div className="movie-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;