import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import styles from "./MovieGrid.module.css"

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  console.log(topMovies);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Best Filmes</h2>
      <div className={styles.moviesContainer}>
        {topMovies.length === 0 && <p> carregando </p>}
        {topMovies.length > 0 && topMovies.map((movie) => 
       <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}

export default Home