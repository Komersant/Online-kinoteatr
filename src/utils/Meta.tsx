import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC } from 'react';


type MetaType = {
	title: string
	description: string
	keywords: string
}

const Meta: FC<MetaType> = ({ title, description, keywords }) => {
	const { pathname } = useRouter()
	const url = `${process.env.APP_URL}${pathname}`

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link rel="conical" href={url} />
				<meta property="og:locale" content="en" />
				<meta property="og:title" content={title} />
				<meta property="og:url" content={url} />
			</Head>
		</>
	)
}

export default Meta