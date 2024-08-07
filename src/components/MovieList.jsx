import '../App.css';

const MovieList = (props) => {
  if (!props.movies || props.movies.length === 0) {
    return <div>No movies found.</div>;
  }

  const FavouriteComponents = props.favouriteComponents;

  return (
    <>
      {props.movies.map((movie) => (
        <div className="imageContainer" key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <div
            className="overlay"
            onClick={() => props.handleFavouriteClick(movie)}
          >
            <FavouriteComponents />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
