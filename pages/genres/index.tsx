import Genre from '@components/screens/Genres/Genre'
import { genres } from '@components/screens/Genres/genres.data'
import Meta from '@utils/Meta'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'


const Genres: FC = () => {
	return (
		<Genre genres={genres} />
	)
}

export default Genres
