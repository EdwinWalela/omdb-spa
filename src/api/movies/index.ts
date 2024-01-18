import axios from 'axios';
import type { Movie } from '../../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getMovies = async (title:string) =>{
  let response;

  try {
    const url = `${BASE_URL}&t=${title}`;
    response = await axios.get(url)
  } catch (error:any) {
    throw new Error(`Failed to get movie list: ${error.message}`);
  }
  
  console.log(response.data)
  return response.data
}

export default {
  getMovies,
}