import { configureStore } from '@reduxjs/toolkit'
import landingReducer  from '../pages/Landing/slice';

export const store = configureStore({
  reducer:{
    landingState:landingReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;