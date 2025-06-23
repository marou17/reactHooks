import React, { useState } from "react";

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newMovie = {
      title,
      description,
      posterUrl,
      rating: Number(rating), 
    };

    onAdd(newMovie); 
    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRating("");
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <h2>Ajouter un film</h2>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="URL de l'affiche"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
      />
      <br />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovie;