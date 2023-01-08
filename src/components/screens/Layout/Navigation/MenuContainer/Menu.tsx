import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMEnu } from './menu.interface'

type MenuType = {
	menu: IMEnu
}

const Menu: FC<MenuType> = ({ menu: { title, items } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.title}>{title}</div>
			<ul>
				{items.map((item, id) => (
					<MenuItem item={item} key={id} />
				))}
			</ul>
		</div>
	)
}

export default Menu
