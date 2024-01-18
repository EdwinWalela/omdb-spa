import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LandingInitialState } from '../../types';

const initialState = {
  searchTitle: '',
  isLoading: false,
  hasError: false,
  errorMessage:'',
  movies:[]
} as LandingInitialState;

export const getMovies = createAsyncThunk(
  'landing/get-movies',
  async(payload: {title:string},{rejectWithValue}) => {
    let res;
    try {
      // TODO: make api request
    } catch (error:any) {
      return rejectWithValue(error.message)
    }
    return res
  }
)

export const landingSlice = createSlice({
  name: 'landing-slice',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state,action)=>{
      state.isLoading = true;
      state.hasError = false;
      state.errorMessage = '';
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
      state.errorMessage = '';
    })
  }
})

