import { moviesType } from '@shared/types.moviesItem'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from './Soon.module.scss'

type SoonTYpe = {
	soon: moviesType[] | undefined
}

const Soon: FC<SoonTYpe> = ({ soon }) => {
	return (
		<div className={styles.soonContainer}>
			<div className={styles.title}>Скоро на сайте</div>
			{soon?.map((el) => (
				<Link href={`/soon/${el.link}`} key={el.id} className={styles.soonItem}>
					<Image
						className={styles.image}
						src={el.icon}
						width={70}
						height={100}
						alt={el.title}
					/>
					<ul>
						<li>{el.genre}</li>
						<li>{el.title}</li>
					</ul>
				</Link>
			))}
			<Link href={`/soon`}>
				<button className={styles.button}>Больше фильмов</button>
			</Link>
		</div>
	)
}

export default Soon
