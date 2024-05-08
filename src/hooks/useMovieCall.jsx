import { useDispatch } from 'react-redux'
import {fetchStart,loadData} from "../features/movieSlice";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.REACT_APP_TMDB_APIKEY;

const useMovieCall = () => {
    const dispatch = useDispatch();


    // async function delay(ms) {
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    //   }
      
      async function fetchData(path, { query = "" } = {}) {
       // await delay(1000);
      
        try {
          const res = await fetch(
            `${BASE_URL}${path}?api_key=${API_KEY}&${query}`
          );
          return res.json();
        } catch (error) {
          throw new Error(error);
        }
      }

    const searchMovies = async (searchText) => {
        dispatch(fetchStart());
        try {
            const res = await fetchData(`/search/movie`, {
              query: `query=${searchText}`,
            });
             console.log(res.results);
             dispatch(loadData(res.results));
          } catch (error) {
            throw new Error("Error happened while fetching movies", error);
          }
    }


    const fetchSingleMovie = async (movieId) => {
        try {
          const res = await fetchData(`/movie/${movieId}`);
          return res;
        } catch (error) {
          throw new Error(`Error happened while fetching movie with this ${movieId}`, error);
        }
      }


  return {searchMovies, fetchSingleMovie}
}

export default useMovieCall