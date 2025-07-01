import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieDescription({ movies }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <p>Film non trouvé</p>;
  }

  return (
    <div className="movie-description" style={{ padding: "20px", maxWidth: "800px", margin: "auto", color: "#fff", textAlign: "center" }}>
      <h2>{movie.title}</h2>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: "100%", maxWidth: "560px", height: "auto", borderRadius: "10px", marginBottom: "20px" }} />
      <p>{movie.description}</p>
      <p>Note : {movie.rating}</p>
      <button
        onClick={() => navigate(-1)}
        style={{ marginTop: "30px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Retour
      </button>
    </div>
  );
}

export default MovieDescription;