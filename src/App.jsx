import React from 'react';
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from './components/Moviecard';
import './App.css';


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTc5OTE0MTI2M2FmNjkyMGE1MGJiOGMzZDYyMmRmZCIsInN1YiI6IjY0YWE1ZTM2YjY4NmI5MDBlZGY5N2IxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ilhEGZnkAlfaWa9RMR8WXDd7FzFB2YuuIHKdXzeAXwY'
  }
};


function App() {
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);

  const api_url = import.meta.env.VITE_TMDB_API;

  const getMovie = async () => {
    let url = api_url+'/discover/movie/?include_adult=true'
    await fetch(url, options)
    .then((res) => {
      res.json()
        .then((resjson) => {setMovies(resjson.results)})
        .catch((e) => console.error(e))
    })
    .catch((e) => console.error(e));
  };
  
  const getTv = async () => {
    let url = api_url+'/discover/tv?include_adult=true'
    await fetch(url, options)
    .then((res) => {
      res.json()
        .then((resjson) => {setTv(resjson.results)})
        .catch((e) => console.error(e))
    })
    .catch((e) => console.error(e));
  };

  useEffect(()=>{
    getMovie();
    getTv();
  }
  , []);

  return (
    <div className="container-fluid movie-app">
      
      <center> <h1 style={{ color: 'white', fontFamily: 'system-ui' }}> MOBOT </h1> </center>
    
      <h2> Discover </h2>
      <h5> Top 20 Movie </h5>
      <div className="row movie">
        <MovieCard movies={movies}/>
      </div>
      
      <h5> Top 20 TV shows </h5>
      <div className="row tv">
        <MovieCard movies={tv}/>
      </div>
    
    </div>
  );
}

export default App
