import React from 'react';
 const  MovieCard = ({title, description, posterUrl, rating}) => {
  return (
    <div className='movie-card'>
        <img src={posterUrl} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Note: {rating}/10</p> 

    </div> 
  )
}
export default MovieCard; 