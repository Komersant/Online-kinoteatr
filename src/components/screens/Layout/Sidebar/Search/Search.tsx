import SearchItem from '@components/ui/SearchItem/SearchItem'
import { IInputSlice } from '@store/inputSlice'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import styles from './Search.module.scss'
import SearchList from './SearchList/SearchList'

const Search: FC = () => {
	const { value, status } = useSelector(
		(state: IInputSlice) => state.inputValue
	)
	return (
		<div className={styles.search}>
			<SearchItem />
			{status && value.length > 1 && <SearchList />}
		</div>
	)
}

export default Search
