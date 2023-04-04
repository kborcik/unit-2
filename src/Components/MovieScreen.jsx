import MovieCard from "./MovieCard";

const MovieScreen = ({
  list,
  page,
  setPage,
  movieList,
  addMovie,
  removeMovie,
}) => {
  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard removeMovie={removeMovie} addMovie={addMovie} movie={movie} list = {list} />
    );
  });

  const decrement = (setPage) => {
    setPage -= 1;
  };

  const increment = () => {
    setPage += 1;
  };

  return (
    <div className="page">
      <h1>Kyle's Movie Theatre</h1>
      <h3>Add a movie to your watchlist!</h3>
      <div>
        <button onClick={page !== 1 && decrement}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default MovieScreen;
