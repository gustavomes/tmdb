import React from 'react'
import { useEffect, useState } from 'react' //hook
import { useSearchParams } from 'react-router-dom' //hook
import MovieCard from '../components/MovieCard'

import styles from './MovieGrid.module.css' //Css

//importação da varáveis do ambiente
const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

//função componente
const Search = () => {

  const [searchParams] = useSearchParams() //uso do hook do react para pegar a url

  const [movies, setMovies] = useState([]) //use state

  const query = searchParams.get("q") // para pegar a url depois do "q"

  const getSarchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

      getSarchedMovies (searchWithQueryURL);
  }, [query]);

  console.log(movies);

  return (
 <div className={styles.container}>
    <h2 className={styles.title}> Resultados para: <span className={styles.queryText}>{query}</span> </h2>
    <div className={styles.moviesContainer}>
      {movies.length === 0 && <p> carregando </p>}
      {movies.length > 0 && movies.map((movie) => 
     <MovieCard key={movie.id} movie={movie}/>)}
    </div>
  </div>
  )
}

export default Search