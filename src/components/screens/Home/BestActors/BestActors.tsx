import { actorsType } from '@shared/types.actors.Item'
import { useGetActorsQuery } from '@store/movies/movies.api'
import Image from 'next/image'
import React, { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './BestActors.module.scss'

export const BestActors: FC = () => {
	const { data, isLoading, error } = useGetActorsQuery(5)

	return (
		<div className={styles.bestActorsWrapper}>
			<div className={styles.title}>Лучшие актёры</div>
			<div className={styles.bestActorsContainer}>
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
					{data?.slice(0, 5).map((el) => (
						<SwiperSlide className={styles.swiperSlide} key={el.title}>
							<ul>
								<li>
									<Image
										src={el.avatar}
										width={200}
										height={300}
										alt={el.title}
									/>
								</li>
								<li>{el.title}</li>
							</ul>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
