import React from "react";
import './MovieCard.css'


const MovieCard = ({
  id,
  image,
  title,
  language,
  amount,
  navigate,
}) => {

  
  return (
      <div className="movie-card">
        <img className="movie-img" src={image} alt={title} />
        <h2 className="movie-title">{title}</h2>
        <p className="movie-lang">{language}</p>
        <p className="movie-amount">{amount}</p>
      </div>
  );
};

export default MovieCard;