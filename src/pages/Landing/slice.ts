import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LandingInitialState, Movie } from '../../types';
import api from '../../api/movies';

const initialState = {
  searchTitle: '',
  isLoading: false,
  hasError: false,
  errorMessage:'',
  movies:[],
  noResults: false
} as LandingInitialState;

export const getMovies = createAsyncThunk(
  'landing/get-movies',
  async(payload: {title:string},{rejectWithValue}) => {
    let movies:Movie[] = [];
    try {
      movies = await api.getMovies(payload.title)
    } catch (error:any) {
      return rejectWithValue(error.message)
    }
  
    return movies;
  }
)

export const landingSlice = createSlice({
  name: 'landing-slice',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state)=>{
      state.isLoading = true;
      state.hasError = false;
      state.errorMessage = '';
      state.movies = [];
      state.noResults = false;
    });
    builder.addCase(getMovies.fulfilled, (state,action)=>{
      state.isLoading = false;
      state.hasError = false;
      state.errorMessage = '';
      state.movies = action.payload;
    })
    builder.addCase(getMovies.rejected, (state,action)=>{
      state.isLoading = false;
      state.hasError = true;
      state.errorMessage = String(action.payload);
    })
  }
})

export default landingSlice.reducer;