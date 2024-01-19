import React from "react";
import Lottie from 'lottie-react';

import loadingIcon from '../../assets/loading.json';
import notFoundIcon from '../../assets/notFound.json';
import { useAppSelector } from "../../hooks";
import { Movie } from "../../types";
import MovieCard from "./movieCard";

const MovieList = () => {
  const state = useAppSelector((state) => state.landingState);
  const movies = state.movies;
  const isLoading = state.isLoading;
  const hasError = state.hasError;
  return (
    <>
      {isLoading && (
        <>
          <Lottie animationData={loadingIcon} className="w-40 block mx-auto" />
          <h1 className="block text-center font-medium text-lg">Fetching movie</h1>
        </>
      )}

      {hasError && (
        <>
          <Lottie animationData={notFoundIcon} className="w-40 block mx-auto" />
          <h1 className="block text-center font-medium text-lg">Movie not found</h1>
        </>
      )}

      {movies.length>0 && (
        <div className="lg:flex lg:flex-wrap lg:justify-center my-10">
          {movies.map((movie:Movie,index:React.Key)=>(
            <MovieCard movie={movie} key={index}/>
          ))}
        </div>
      )}

    </>
  );
}

export default MovieList;