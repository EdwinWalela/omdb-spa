import MovieCard from "./movieCard";

const MovieList = () => {
  return (
    <div className="flex flex-wrap justify-center my-10">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}

export default MovieList;