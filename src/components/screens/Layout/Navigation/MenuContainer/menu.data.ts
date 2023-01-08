import { IMEnu } from './menu.interface';


export const navigation: IMEnu = {
	title: 'Меню',
	items: [
		{
			_id: 1,
			title: 'Главная',
			link: '/',
			icon: 'ImHome',
		},
		{
			_id: 2,
			title: 'Жанры',
			link: '/genres',
			icon: 'ImLab',
		},
		{
			_id: 3,
			title: 'Новинки',
			link: '/novelties',
			icon: 'ImSpinner11',
		},
		{
			_id: 1,
			title: 'Популярное',
			link: '/popular',
			icon: 'ImFire',
		},
	],
}

export const genres: IMEnu = {
	title: 'Популярные жанры',
	items: [
		{
			_id: 1,
			title: 'Комедии',
			link: '/comedy',
			icon: 'ImTux',
		},
		{
			_id: 2,
			title: 'Мультфильмы',
			link: '/cartoons',
			icon: 'ImJoomla',
		},
		{
			_id: 3,
			title: 'Фантастика',
			link: '/fantasy',
			icon: 'ImMagicWand',
		},
		{
			_id: 4,
			title: 'Биографии',
			link: '/biographies',
			icon: 'ImSteam',
		},
	],
}