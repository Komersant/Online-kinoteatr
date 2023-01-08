import { configureStore } from '@reduxjs/toolkit';
import inputSlice from './inputSlice';



import { moviesApi } from './movies/movies.api';


export const store = configureStore({
	reducer: {
		[moviesApi.reducerPath]: moviesApi.reducer,
		inputValue: inputSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(moviesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch