import { FC } from 'react'

import Menu from './Menu'
import styles from './MenuContainer.module.scss'
import { navigation, genres } from './menu.data'
import Logo from './Logo'

const MenuContainer: FC = () => {
	return (
		<div className={styles.menuContainer}>
			<Logo />
			<Menu menu={navigation} />
			<Menu menu={genres} />
		</div>
	)
}

export default MenuContainer
