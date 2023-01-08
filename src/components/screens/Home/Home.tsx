import { useGetActorsQuery, useGetMoviesQuery } from '@store/movies/movies.api'
import Meta from '@utils/Meta'
import { FC } from 'react'

import BanerSlider from './BG/BanerSlider'
import { BestActors } from './BestActors/BestActors'
import SkeletonWeekActors from './SkeletonWeekActors'
import TopWeek from './TopWeek/TopWeek'

const Home: FC = () => {
	const { isLoading } = useGetMoviesQuery(4)
	return (
		<>
			<Meta
				title="Watch movies online"
				description="watch movies online"
				keywords="kinogo, киного, смотреть кино онлайн, смотреть фильм, фильмы 2020 смотреть онлайн, фильмы онлайн бесплатно, смотреть фильмы онлайн бесплатно без регистрации"
			/>
			<BanerSlider />
			{isLoading ? (
				[...new Array(4)].map((el, id) => <SkeletonWeekActors key={id} />)
			) : (
				<TopWeek />
			)}
			<BestActors />
		</>
	)
}

export default Home
