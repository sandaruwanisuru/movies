import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList';
import Search from '../../components/Search';
import MovieHeading from '../../components/MovieHeading';
import AddFavourite from '../../components/AddFavourite';
import Navbar from '../../components/navbar/Navbar';
import './HomePage.css';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchMovies = async (searchValue) => {
      if (searchValue) {
        try {
          const result = await fetch(
            `http://www.omdbapi.com/?s=${searchValue}&apikey=2d0f6296`
          );
          const data = await result.json();

          if (data.Search) {
            setMovies(data.Search);
          } else {
            setMovies([]);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    localStorage.setItem(
      'react-movie-app-favourites',
      JSON.stringify(newFavouriteList)
    );
  };

  return (
    <div className="homePage">
      <Navbar />
      <MovieHeading heading="Movies" />
      <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      <div className="movieList">
        <MovieList
          movies={movies}
          favouriteComponents={AddFavourite}
          handleFavouriteClick={addFavouriteMovie}
        />
      </div>
    </div>
  );
};

export default HomePage;
