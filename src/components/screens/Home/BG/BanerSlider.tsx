import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'

import styles from './BanerSlider.module.scss'

const data = [
	{
		id: 1,
		title: 'Аватар',
		image: '/bg/avatar.jpg',
	},
	{
		id: 2,
		title: 'Еканто',
		image: '/bg/encanto-big.jpg',
	},
	{
		id: 3,
		title: 'Хоббит',
		image: '/bg/hobbit.jpg',
	},
	{
		id: 4,
		title: 'Я легенда',
		image: '/bg/i-am-legend-big.jpg',
	},
	{
		id: 5,
		title: 'Ип ман',
		image: '/bg/ip-man.jpg',
	},
	{
		id: 6,
		title: 'Джон Вик',
		image: '/bg/john-wick.jpg',
	},
	{
		id: 7,
		title: 'Красный пёс',
		image: '/bg/red-dog.jpg',
	},
	{
		id: 8,
		title: 'Спайдер мен',
		image: '/bg/spider-man.jpg',
	},
]

const BanerSlider = () => {
	return (
		<div className={styles.banerSliderWrapper}>
			<div className={styles.title}>Афиша</div>
			<div className={styles.banerSliderContainer}>
				<Swiper
					modules={[Autoplay]}
					className={styles.swiperContainer}
					spaceBetween={100}
					slidesPerView={1}
					autoplay={{
						delay: 2000,
						pauseOnMouseEnter: true,
						disableOnInteraction: false,
					}}
					loop
				>
					{data.map((el) => (
						<SwiperSlide className={styles.slide} key={el.id}>
							<ul>
								<li>
									<span>{el.title}</span>
									<Image
										src={el.image}
										width={1231}
										height={399}
										alt={el.title}
									/>
								</li>
							</ul>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default BanerSlider
