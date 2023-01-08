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
		return el.type === 'comedy'
	})

	return {
		props: {
			comedy: arr,
		},
	}
}

type ComedyTYpe = {
	comedy: moviesType[]
}

const ComedyMovies: FC<ComedyTYpe> = ({ comedy }) => {
	return (
		<div className="container">
			<div className="titleListMovies">Комедии</div>
			<Meta
				title="Комедии онлайн, смотреть комедии 2021, 2022 в хорошем качестве"
				description="Смотреть фильмы Комедии онлайн бесплатно, в хорошем качестве без регистрации. Лучшие фильмы мирового проката, известных режиссеров и актеров совершенно бесплатно без смс."
				keywords="комедии онлайн, смотреть онлайн комедии, комедии 2020, комедии смотреть бесплатно, молодежные комедии, комедии 2019 онлайн"
			/>
			{comedy.map((el) => (
				<Link href={`/comedy/${el.link}`} key={el.id}>
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

export default ComedyMovies
