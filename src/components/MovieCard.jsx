import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import React from 'react'

import styles from './MovieCard.module.css'

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
    return (
      <div className={styles.movieCard}>
        <img src={imagesURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
          <FaStar /> {movie.vote_average}
        </p>
        {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      </div>
    );
  };
  
  export default MovieCard;


