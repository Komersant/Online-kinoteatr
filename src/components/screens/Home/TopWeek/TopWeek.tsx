import { moviesType } from '@shared/types.moviesItem'
import { useGetMoviesQuery } from '@store/movies/movies.api'
import Image from 'next/image'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './TopWeek.module.scss'

type TopWeekType = {
	data: moviesType[] | undefined
}

const TopWeek: FC = () => {
	const { data } = useGetMoviesQuery(5)

	return (
		<div className={styles.topWeekWrapper}>
			<div className={styles.title}>Топ за неделю</div>
			<div className={styles.topWeekContainer}>
				<Swiper
					className={styles.swiper}
					slidesPerView={4}
					breakpoints={{
						320: {
							width: 320,
							slidesPerView: 1.5,
						},
						640: {
							width: 640,
							slidesPerView: 2.5,
						},
						768: {
							width: 768,
							slidesPerView: 3,
						},
						1000: {
							width: 1000,
							slidesPerView: 4,
						},
						1300: {
							width: 1300,
							slidesPerView: 4.5,
						},
					}}
					loop
				>
					{data
						?.filter((el) => el.topWeek > 0)
						.sort(function (a, b) {
							return b.topWeek - a.topWeek
						})
						.slice(0, 8)
						.map((el) => (
							<SwiperSlide
								className={`${styles.swiperSlide} ${styles.ibg}`}
								key={el.id}
							>
								<Image src={el.icon} width={200} height={300} alt={el.title} />
								<span>{el.title}</span>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</div>
	)
}

export default TopWeek
