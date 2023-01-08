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
	const arr = data.filter((el: { year: number }) => {
		return el.year === 2022
	})

	return {
		props: {
			novelties: arr,
		},
	}
}

type NoveltiesTYpe = {
	novelties: moviesType[]
}

const NoveltiesMovies: FC<NoveltiesTYpe> = ({ novelties }) => {
	return (
		<div className="container">
			<div className="titleListMovies">Новинки за 2022 год</div>
			<Meta
				title="Новинки смотреть онлайн, новые фильмы 2022 года онлайн в HD качестве бесплатно"
				description="Смотрите онлайн новые фильмы 2022 года в хорошем качестве на киного"
				keywords="kinogo, киного, смотреть кино онлайн, смотреть фильм, фильмы 2022 смотреть онлайн, фильмы онлайн бесплатно, смотреть фильмы онлайн бесплатно без регистрации"
			/>
			{novelties.map((el) => (
				<Link href={`/novelties/${el.link}`} key={el.id}>
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
								<Rate name={el.rating}/>
							</li>
						</ul>
					</div>
				</Link>
			))}
		</div>
	)
}

export default NoveltiesMovies
