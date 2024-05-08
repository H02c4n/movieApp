import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const defaultImage ="https://images.unsplash.com/photo-1609743522653-52354461eb27?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90JTIwZm91bmR8ZW58MHx8MHx8fDA%3D";

const SingleMovie = ({ movie}) => {
    const { poster_path, title, overview } = movie;
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={styles.overview}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link to={-1} className={styles.playButton}>
          Go back
        </Link>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : defaultImage}
          alt={title}
          className={styles.movieImage}
          
        />
      </div>
    </div>
  )
}

export default SingleMovie
