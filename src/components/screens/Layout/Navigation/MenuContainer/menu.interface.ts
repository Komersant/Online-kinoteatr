import { ReactIconsType } from '@shared/icon.types';


export interface IMenuItem {
	_id: number
	title: string
	link: string
	icon: ReactIconsType
}

export interface IMEnu {
	title: string
	items: IMenuItem[]
}