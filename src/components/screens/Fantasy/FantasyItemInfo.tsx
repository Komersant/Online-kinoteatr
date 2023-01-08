import { moviesType } from '@shared/types.moviesItem'
import Meta from '@utils/Meta'
import Image from 'next/image'
import { FC } from 'react'

type FantasyItemInfoProps = {
	fantasyItem: moviesType
}

const FantasyItemInfo: FC<FantasyItemInfoProps> = ({ fantasyItem }) => {
	return (
		<>
			{fantasyItem.map((el) => (
				<div key={el.id} className="itemContainer">
					<Meta
						title={el.title}
						description={el.description}
						keywords={el.keywords}
					/>
					<div className="title">{el.title}</div>
					<div className="blockAbout">
						<Image src={el.icon} width={250} height={400} alt={el.title} />
						<ul>
							<li>
								<span>Название фильма : </span>
								{el.title}
							</li>
							<li>
								<span>Год выпуска : </span>
								{el.year}
							</li>
							<li>
								<span>Страна : </span> {el.country}
							</li>
							<li>
								<span>Жанр : </span>
								{el.genre}
							</li>
							<li>
								<span>Продюсер : </span>
								{el.producer}
							</li>
							<li>
								<span>Актёры : </span>
								{el.acters}
							</li>
						</ul>
					</div>
					<ul className="blockDescription">
						<li>
							<span>Описание фильма : </span> <br />
							{el.about}
						</li>
					</ul>
				</div>
			))}
		</>
	)
}

export default FantasyItemInfo
