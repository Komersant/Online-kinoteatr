import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { actorsType } from '@shared/types.actors.Item';
import { moviesType } from '@shared/types.moviesItem';


export const moviesApi = createApi({
	reducerPath: 'api/movies',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://63a443712a73744b007209b2.mockapi.io/',
	}),
	endpoints: (build) => ({
		getMovies: build.query<moviesType[], number>({
			query: (limit = 2) => `kino-poisk?limit=${limit}`,
		}),
		getActors: build.query<actorsType[], number>({
			query: (limit = 2) => `bestActors?limit=${limit}`,
		}),
	}),
})

export const { useGetMoviesQuery } = moviesApi
export const {useGetActorsQuery } = moviesApi