import React, { useState } from "react";
import data from "../../assets/movie.json";
import MovieTable from "./MovieTable";
import { Movie } from "./types/movies";

type MovieBoxProps = {
    title: string
}

const MovieBox = ({title}: MovieBoxProps) => {
  const [movie, setMovie] = useState<Movie[]>(data.movies);
  return (
    <div className="movies">
        <div className="movietitle">
        <h2>{title}</h2>
        </div>
      <MovieTable data={movie} />
    </div>
  );
};

export default MovieBox;
