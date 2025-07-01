import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card" style={{ width: "220px", backgroundColor: "#1e1e1e", color: "#fff", borderRadius: "10px", padding: "15px", textAlign: "center", boxShadow: "0 4px 6px rgba(0,0,0,0.3)", cursor: "pointer" }}>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: "100%", height: "320px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }} />
      <h3>{movie.title}</h3>
      <p>Note: {movie.rating}</p>
      <Link to={`/movie/${movie.id}`} style={{ color: "#2196f3", textDecoration: "none" }}>
        Voir détails
      </Link>
    </div>
  );
}

export default MovieCard;