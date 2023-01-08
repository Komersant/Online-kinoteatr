import { moviesType } from '@shared/types.moviesItem'
import { IInputSlice, setValue } from '@store/inputSlice'
import { useGetMoviesQuery } from '@store/movies/movies.api'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './SearchList.module.scss'

const SearchList: FC = () => {
	const { value, status } = useSelector(
		(state: IInputSlice) => state.inputValue
	)
	const dispatch = useDispatch()

	const { data, isLoading, error } = useGetMoviesQuery(5)
	return (
		<div className={styles.inputList}>
			{value &&
				data
					?.filter((el) => {
						const title = el.title.toLowerCase()
						const poisk = title.includes(value.toLowerCase())
						return poisk
					})
					.map((el) => (
						<Link
							onClick={() => dispatch(setValue(''))}
							href={`/${el.type}/${el.link}`}
							key={el.id}
						>
							<ul>
								<Image src={el.icon} width={60} height={80} alt={el.title} />
								<li>{el.title}</li>
							</ul>
						</Link>
					))}
		</div>
	)
}

export default SearchList
