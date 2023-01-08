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
		return el.type === 'biographies'
	})

	return {
		props: {
			biographies: arr,
		},
	}
}

type BiographiesTYpe = {
	biographies: moviesType[]
}

const BiographiesMovies: FC<BiographiesTYpe> = ({ biographies }) => {
	return (
		<div className="container">
			<div className="titleListMovies">Биографии</div>
			<Meta
				title="Фантастика смотреть онлайн, фильмы фантастика 2021, 2022 в хорошем качестве"
				description="Смотреть фильмы Фантастика онлайн бесплатно, в хорошем качестве без регистрации. Лучшие фильмы мирового проката, известных режиссеров и актеров совершенно бесплатно без смс."
				keywords="фантастика онлайн, смотреть фантастику, фантастика онлайн бесплатно, фильмы онлайн фантастика, фантастика 2017, фантастика в хорошем качестве"
			/>
			{biographies.map((el) => (
				<Link href={`/biographies/${el.link}`} key={el.id}>
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

export default BiographiesMovies
