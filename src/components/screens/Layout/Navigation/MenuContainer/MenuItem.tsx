import ReactIconsElement from '@components/ui/ReactIconsElement'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './MenuItem.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { pathname } = useRouter()

	return (
		<li
			className={`${styles.item} ${
				pathname === item.link ? styles.active : ''
			}`}
		>
			<Link href={item.link} key={item._id}>
				<ReactIconsElement name={item.icon} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
