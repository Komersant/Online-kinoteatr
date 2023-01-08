import BiographiesItemInfo from '@components/screens/Biographies/BiographiesItemInfo'
import FantasyItemInfo from '@components/screens/Fantasy/FantasyItemInfo'
import { moviesType } from '@shared/types.moviesItem'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { FC } from 'react'

interface IParams extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const res = await fetch(
			'https://63a443712a73744b007209b2.mockapi.io/kino-poisk'
		)
		const data = await res.json()
		const arr = data.filter((el: { type: string }) => {
			return el.type === 'biographies'
		})

		const paths = arr.map(({ link }: any) => ({
			params: { id: link.toString() },
		}))

		return {
			paths,
			fallback: 'blocking',
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	try {
		const { id } = context.params as IParams
		const res = await fetch(
			`https://63a443712a73744b007209b2.mockapi.io/kino-poisk?link=${id}`
		)
		const data = await res.json()

		return {
			props: {
				biographiesItem: data,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

type BiographiesItemProps = {
	biographiesItem: moviesType
}

const BiographiesItem: FC<BiographiesItemProps> = ({ biographiesItem }) => {
	return <BiographiesItemInfo biographiesItem={biographiesItem} />
}

export default BiographiesItem
