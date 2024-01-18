import axios from 'axios';
import type { Movie } from '../../types';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getMovies = async (title:string) =>{
  let response;

  try {
    response = await axios.get(`${BASE_URL}&t=${title}`)
  } catch (error:any) {
    throw new Error(`Failed to get movie list: ${error.message}`);
  }
  return response.data
}

export default {
  getMovies,
}