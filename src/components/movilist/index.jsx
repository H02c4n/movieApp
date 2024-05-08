import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from "./styles.module.css";

const defaultImage ="https://images.unsplash.com/photo-1609743522653-52354461eb27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90JTIwZm91bmR8ZW58MHx8MHx8fDA%3D";

const MovieList = ({movies, title}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{movies.length > 0 ? title : ''}</h3>
      <div className={styles.movies}>
        {movies.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                alt={movie.title}
                src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : defaultImage}
              />
            </Link>
            <div onClick={() => navigate(`/movie/${movie.id}`, {state:movie})} className="moviInfo">
                <div className={styles.overlay}>
                    <h2 className={styles.movieTitle}>{movie.title}</h2>
                    <p className={styles.movieOverview}>{movie.overview}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieList