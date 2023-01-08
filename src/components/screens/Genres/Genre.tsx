import Meta from '@utils/Meta'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from '@components/screens/Genres/Genres.module.scss'

type Genre = {
	title: string
	id: number
	icon: string
	link: string
}

type GenreTYpe = {
	genres: Genre[]
}

const Genre: FC<GenreTYpe> = ({ genres }) => {
	return (
		<div className={styles.genres}>
			<Meta
				title="Фильмы онлайн, смотрите фильмы онлайн в HD качестве бесплатно"
				description="Смотрите фильмы онлайн в HD качестве, отличный плеер, лучшее качество, проведи время с киного!"
				keywords="фильмы, онлайн, бесплатно, смотреть фильмы онлайн"
			/>
			<div className="titleListMovies">Список жанров</div>
			<ul>
				{genres.map(({ title, icon, id, link }) => (
					<Link className={styles.link} key={id} href={link}>
						<li>
							<Image
								className={styles.image}
								src={icon}
								width={250}
								height={350}
								alt="icon"
							/>
							<span className={styles.title}>{title}</span>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default Genre
