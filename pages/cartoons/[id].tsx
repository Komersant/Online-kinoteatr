import CartoonsItemInfo from '@components/screens/Cartoons/CartoonsItemInfo'
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
			return el.type === 'cartoons'
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
				cartoonsItem: data,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

type CartoonsItemProps = {
	cartoonsItem: moviesType
}

const CartoonsItem: FC<CartoonsItemProps> = ({ cartoonsItem }) => {
	return <CartoonsItemInfo cartoonsItem={cartoonsItem} />
}

export default CartoonsItem
