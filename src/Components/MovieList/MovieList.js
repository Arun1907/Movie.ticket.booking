import React, { useState } from "react";
import './MovieList.css'
import MovieCard from "../MovieCard/MovieCard";
import { movies } from "../Data";
import { useNavigate, useParams } from "react-router-dom";


const MovieList = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const handleBooking = (movieName) => {
    navigate("/timing", { state: { movieName } });
  };
  return (
    <div>
      <h1 className="heading">Movies</h1>
      <div className="sub-btn"><p className="subtitle">Enjoy Your Show!</p>
      <button className="show-btn" onClick={() => setShowAll(true)}>Show All</button></div>
      <div className={`card-container ${showAll ? "" : "hide-last"}`} onClick={()=>{navigate("/timing")}} >
        {movies.map((movie) => 
          
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.image}
            title={movie.title}
            language={movie.language}
            amount={movie.amount}
            
          />
          
)}
      </div>
    </div>
  );
};


export default MovieList;