import axios from 'axios';
import { Movie } from '../../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getMovies = async (title:string):Promise<Movie[]> =>{
  let response;

  try {
    const url = `${BASE_URL}&t=${title}`;
    response = await axios.get(url)
  } catch (error:any) {
    throw new Error(`Failed to get movie list: ${error.message}`);
  }
  let movies:Movie[] = [];
  if(response.data.Response == 'False'){
    throw new Error(response.data.Error)
  }
  if(Array.isArray(response.data)){
    response.data.forEach(data => {
      let movie:Movie = {
        plot: data.Plot,
        title: data.Title,
        year:data.Year,
        language:data.Language,
        length:data.Runtime,
        cast:data.Actors,
        rating:data.imdbRating,
        poster:data.Poster,
      }
      movies.push(movie)
    });
  }else{
    movies.push({
      plot: response.data.Plot,
      title: response.data.Title,
      year:response.data.Year,
      language:response.data.Language,
      length:response.data.Runtime,
      cast:response.data.Actors,
      rating:response.data.imdbRating,
      poster:response.data.Poster,
    })
  }
  return movies;
}

export default {
  getMovies,
}