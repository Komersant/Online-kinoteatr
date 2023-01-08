import { useRouter } from 'next/router'
import React from 'react'

const Error = () => {
	const router = useRouter()

	React.useEffect(() => {
		setTimeout(() => router.push('/'), 3000)
	}, [])

	return (
		<>
			<h1>Ошибка при загрузке</h1>
			<h3>Вы будете перенапрвлены на главную страницу</h3>
		</>
	)
}

export default Error
