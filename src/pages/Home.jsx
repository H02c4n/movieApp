import React, {useState} from 'react'
import { toastWarnNotify } from "../helpers/ToastNotify";
import useMovieCall from '../hooks/useMovieCall';
import { useSelector } from 'react-redux';
import MovieList from '../components/movilist';


const Home = () => {
    
    const {searchMovies} = useMovieCall();
    const {movieList} = useSelector((state) => state.movie);
    const [searchText, setSearchText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      searchMovies(searchText);
      setSearchText("");
    }else {
        toastWarnNotify("Please enter a text for searching...");
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        handleSubmit(e);
    }
  }


  return (
    <div>
         <form className="d-flex justify-content-center p-2" onSubmit={handleSubmit}>
  <input
    type="search"
    autoFocus
    className="form-control me-2"
    placeholder="Search a movie..."
    onChange={(e) => setSearchText(e.target.value)}
    value={searchText}
    onKeyPress={handleKeyPress}
  />
  <button className="btn btn-primary" type="submit">
    Search
  </button>
</form>
<MovieList title="Listed Movies" movies={movieList} />
    </div>
  )
}

export default Home