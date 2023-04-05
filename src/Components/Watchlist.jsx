import MovieCard from "./MovieCard";

const Watchlist = ({ list, removeMovie, addMovie, movie }) => {
  const movieDisplay = list.map((movie, index) => {
    return <MovieCard list={list} movie={movie} addMovie={addMovie} removeMovie={removeMovie} />;
  });
  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
