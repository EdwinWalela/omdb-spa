import MovieList from "./movieList";
import SearchForm from "./searchForm";

const LandingPage = () => {
  return (
    <div className="grow">
      <SearchForm />
      <MovieList />
    </div>
  )
}

export default LandingPage;