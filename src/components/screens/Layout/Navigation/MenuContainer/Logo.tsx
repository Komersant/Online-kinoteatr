import React from 'react'
import Image from 'next/image'
import styles from './Logo.module.scss'
import logo from '@assets/images/logo.svg'

const Logo = () => {
	return (
		<div className={styles.logo}>
			<Image
				className={styles.image}
				src={logo}
				width={50}
				height={50}
				alt="Онлайн фильмы"
			/>
			<span>Кинопоиск</span>
		</div>
	)
}

export default Logo
