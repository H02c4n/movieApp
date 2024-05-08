import React from 'react'
import { useLocation } from 'react-router-dom'
import SingleMovie from '../components/singlemovie';

const MovieDetail = () => {
    const {state:movie} = useLocation();
  return (
    <SingleMovie movie={movie}/>
  )
}

export default MovieDetail