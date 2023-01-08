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
	const arr = data.filter((el: { type: string }) => {
		return el.type === 'cartoons'
	})

	return {
		props: {
			cartoons: arr,
		},
	}
}

type CartoonsTYpe = {
	cartoons: moviesType[]
}

const CartoonsMovies: FC<CartoonsTYpe> = ({ cartoons }) => {
	return (
		<div className="container">
			<div className="titleListMovies">Мультфильмы</div>
			<Meta
				title="Мультфильмы онлайн, смотреть мультфильмы 2021, 2022 в хорошем качестве"
				description="Смотреть мультфильмы онлайн бесплатно, в хорошем качестве без регистрации. Лучшие мультфильмы мирового проката, известных режиссеров и студий совершенно бесплатно без смс"
				keywords="смотреть мультфильмы онлайн, мультфильмы 2022, мультфильмы в хорошем качестве, мультфильмы онлайн 2020"
			/>
			{cartoons.map((el) => (
				<Link href={`/cartoons/${el.link}`} key={el.id}>
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

export default CartoonsMovies
