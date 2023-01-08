import Rate from '@components/ui/Rating/Rate'
import { moviesType } from '@shared/types.moviesItem'
import Meta from '@utils/Meta'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const getStaticProps = async () => {
	const res = await fetch(
		'https://63a443712a73744b007209b2.mockapi.io/kino-poisk'
	)
	const data = await res.json()
	const arr = data.filter((el: { rating: number }) => {
		return el.rating === 5
	})

	return {
		props: {
			popular: arr,
		},
	}
}

type PopularTYpe = {
	popular: moviesType[]
}

const PopularMovies: FC<PopularTYpe> = ({ popular }) => {
	return (
		<div className="container">
			<div className="titleListMovies">Топ по мнению пользователей сайта</div>
			<Meta
				title="ТОП фильмы смотреть онлайн"
				description="ТОП фильмы смотреть онлайн на киного"
				keywords="фильмы, топ, смотреть, лучшие, онлайн, бесплатно"
			/>
			{popular.map((el) => (
				<Link href={`/popular/${el.link}`} key={el.id}>
					<div className="item">
						<Image src={el.icon} width={200} height={300} alt="movies icon" />
						<ul>
							<li>
								<span>Название фильма : </span> {el.title}
							</li>
							<li>
								<span>Год выпуска : </span> {el.year}
							</li>
							<li>
								<span>Страна : </span> {el.country}
							</li>
							<li>
								<span>Жанр : </span>
								{el.genre}
							</li>
							<li>
								<span>Продюсер : </span> {el.producer}
							</li>
							<li>
								<span>Актёры : </span> {el.acters}
							</li>
							<li>
								<Rate name={el.rating} />
							</li>
						</ul>
					</div>
				</Link>
			))}
		</div>
	)
}

export default PopularMovies
