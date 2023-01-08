import React, { FC } from 'react'
import { FaStar } from 'react-icons/fa'

import styles from './Rate.module.scss'


const colors = {
	gray: 'gray',
	red: 'red',
}

type RateType = {
	name: number
}

const Rate: FC<RateType> = ({ name }) => {
	const stars = Array(5).fill(0)
	const [current, setCurrent] = React.useState(name)
	const [hover, setHover] = React.useState(name)

	const onClickCurrent = (value: number) => {
		setCurrent(value)
	}

	const onHoverOver = (value: number) => {
		setHover(value)
	}

	const onHoverLeave = () => {
		setHover(0)
	}

	return (
		<div className={styles.ratingContainer}>
			<div className={styles.rating}>
				{stars.map((_, id) => (
					<FaStar
						style={{ cursor: 'pointer' }}
						color={(current || hover) > id ? colors.red : colors.gray}
						onClick={() => onClickCurrent(id + 1)}
						onMouseOver={() => onHoverOver(id + 1)}
						onMouseLeave={onHoverLeave}
						key={id}
					/>
				))}
			</div>
			<span>Рейтинг : {current}</span>
		</div>
	)
}

export default Rate
