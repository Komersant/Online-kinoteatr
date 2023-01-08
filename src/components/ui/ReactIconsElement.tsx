import { FC } from 'react'
import * as ReactIcons from 'react-icons/im'
import { ReactIconsType } from 'shared/icon.types'

const ReactIconsElement: FC<{ name: ReactIconsType }> = ({ name }) => {
	const ReactIconsItem = ReactIcons[name]
	return <ReactIconsItem />
}

export default ReactIconsElement
