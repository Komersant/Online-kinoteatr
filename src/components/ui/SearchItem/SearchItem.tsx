import inputSlice, { IInputSlice, setStatus, setValue } from '@store/inputSlice'
import React, { FC } from 'react'
import 'react-icons/'
import { ImSearch } from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux'

import styles from './SearchItem.module.scss'

const SearchItem: FC = () => {
	const { value, status } = useSelector(
		(state: IInputSlice) => state.inputValue
	)
	const dispatch = useDispatch()
	const inputRef = React.useRef<HTMLInputElement>(null)

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setValue(event.target.value))
		dispatch(setStatus(true))
	}

	React.useEffect(() => {
		if (!status) {
			return
		}

		const changeInputHandler = (event: any) => {
			if (inputRef.current && !inputRef.current?.contains(event.target)) {
				dispatch(setStatus(false))
			}
		}

		document.addEventListener('click', changeInputHandler)
		return () => {
			document.removeEventListener('click', changeInputHandler)
		}
	}, [status])
	return (
		<div className={styles.searchItem}>
			<ImSearch />
			<input
				ref={inputRef}
				className={styles.input}
				type="text"
				value={value}
				onClick={() => dispatch(setStatus(true))}
				onChange={(event) => onChangeHandler(event)}
			/>
		</div>
	)
}

export default SearchItem
