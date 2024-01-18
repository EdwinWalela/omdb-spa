import React from "react";
import { useAppSelector } from "../../hooks";
import { Movie } from "../../types";
import MovieCard from "./movieCard";

const MovieList = () => {
  const state = useAppSelector((state) => state.landingState);
  const movies = state.movies;
  
  return (
    <div className="flex flex-wrap justify-center my-10">
      {movies.map((movie:Movie,index:React.Key)=>(
         <MovieCard movie={movie} key={index}/>
      ))}
      
    </div>
  );
}

export default MovieList;