import logo from "./logo.svg";
import "./App.css";
import MovieList, { Movie } from "./components";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  useEffect(() => {

    // Check if there is data in Local str
    if(localStorage.getItem('movies')) {
      // get from the storage
    } else {
       // Make API calls
      axios
      .get('https://api.themoviedb.org/3/discover/movie?api_key=a05e7d6beb2f7a3517a89a11bbe7d381&with_genres=28')
      .then( response => {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
    }

   

    axios
    .get('https://api.themoviedb.org/3/genre/movie/list?api_key=a05e7d6beb2f7a3517a89a11bbe7d381&language=en-US')
    .then( response => {
      console.log(response.data.genres);
      setGenres(response.data.genres);
    });
  }, []);

  const selectMovies = (e) => {
    console.log();
    const selectedVal = e.target.options[e.target.options.selectedIndex].value;
    // genreIds
    setGenreIds([...genreIds, selectedVal]);
  }

  return (
    <div>
      <select name="cars" id="cars" multiple onChange={selectMovies}>
        {genres.map( (genre) => <option value={genre.id}>{genre.name}</option>)}
      </select>
      
      <MovieList movies={movies}/>
      
    </div>
  );
}

export default App;
