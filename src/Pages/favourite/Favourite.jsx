import { useEffect, useState } from 'react';
import MovieHeading from '../../components/MovieHeading';
import MovieList from '../../components/MovieList';
import RemoveFavourite from '../../components/RemoveFavourite';
import Navbar from '../../components/navbar/Navbar';
import './Favourite.css';

const FavouritesPage = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    localStorage.setItem(
      'react-movie-app-favourites',
      JSON.stringify(newFavouriteList)
    );
  };

  return (
    <div className="favouriteSection">
      <Navbar />
      <MovieHeading heading="Favourites" />
      <div className="favourites">
        <MovieList
          movies={favourites}
          favouriteComponents={RemoveFavourite}
          handleFavouriteClick={removeFavouriteMovie}
        />
      </div>
    </div>
  );
};

export default FavouritesPage;
