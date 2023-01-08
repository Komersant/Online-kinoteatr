import { useGetMoviesQuery } from '@store/movies/movies.api'
import { FC } from 'react'

import Search from './Search/Search'
import styles from './SideBar.module.scss'
import Soon from './Soon/Soon'
import SoonLoader from './Soon/SoonSkeleton'

const SideBar: FC = () => {
	const { data, isLoading, error } = useGetMoviesQuery(2)
	const soon = data?.filter((el) => {
		return el.type === 'soon'
	})
	const newArr = soon?.slice(0, 3)

	return (
		<div className={styles.sideBarContainer}>
			<Search />
			{isLoading ? (
				[...new Array(3)].map((el, id) => <SoonLoader key={id} />)
			) : (
				<Soon soon={newArr} />
			)}
		</div>
	)
}

export default SideBar
