import React, { useState, useEffect } from "react";
import axios from 'axios'
import Header from "./Components/Header";
import MovieScreen from "./Components/MovieScreen";
import Watchlist from "./Components/Watchlist";

import "./App.css";

function App() {
  const [list,setList]=useState([]);
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  
  const addMovie = (movie) => setList([...list, movie])
  
  const removeMovie = (movie => {
    const newState = list.filter((mov) => {
      return mov !== movie
    })
     setList(newState)
  })
  
  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        {/* <MovieScreen
          removeMovie={removeMovie}
          addMovie={addMovie}
          list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
        />
        <Watchlist list={list} /> */}
      </main>
    </div>
  );
}

export default App;
