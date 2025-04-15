import IService from '../models/IServiceForClient'

const SERVICE_FOR_CLIENT: IService[] = [
	{
		id: 1,
		name: `Corporate website`,
		description: `Corporate websites represent the company, its services, products and values. They often contain information about the company, its history, team, projects, and contact information.`,
		sections: [
			{
				id: 1,
				name: `Главная страница`,
				desc: `Введение в компанию, ключевые услуги и преимущества`,
			},
			{
				id: 2,
				name: `О нас`,
				desc: `Информация о компании, ее миссия, видение и история`,
			},
			{
				id: 3,
				name: `Услуги`,
				desc: `Подробное описание предлагаемых услуг, таких как веб-разработка, мобильные приложения, консалтинг и т.д.`,
			},
		],
	},
	{
		id: 2,
		name: `Визитка`,
		description: `Визитки — это простые одностраничные сайты, которые представляют личность или небольшую компанию. Они содержат основную информацию о человеке или услуге.`,
		sections: [
			{
				id: 1,
				name: `Главная страница`,
				desc: `Краткое представление о фрилансере, его навыках и услугах`,
			},
			{ id: 2, name: `Портфолио`, desc: `Галерея работ с описанием проектов` },
		],
	},
]

export default SERVICE_FOR_CLIENT
