import React, { useState } from "react";

function AddMovie({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !posterUrl || !rating) {
      alert("Merci de remplir tous les champs");
      return;
    }

    const newMovie = {
      id: Date.now(), // id unique simple
      title,
      description,
      posterUrl,
      rating: Number(rating),
    };

    onAdd(newMovie);

    // Reset form
    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form" style={{ maxWidth: "500px", margin: "20px auto", backgroundColor: "#1e1e1e", padding: "20px", borderRadius: "10px", color: "#ddd" }}>
      <h2>Ajouter un film</h2>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none" }}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none", height: "80px" }}
      />
      <input
        type="text"
        placeholder="URL de l'affiche"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none" }}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "none" }}
      />
      <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#2196f3", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        Ajouter
      </button>
    </form>
  );
}

export default AddMovie;