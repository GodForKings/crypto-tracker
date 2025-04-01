import Main from '../pages/main/Main'
import About from '../pages/about/About'
import { MAIN, ABOUT, TOKEN } from '../constants/nameRoutes'
import { RouteObject } from 'react-router-dom'

export const publicRoutes: RouteObject[] = [
	{
		path: ABOUT,
		element: <About />,
	},
	{
		path: MAIN,
		element: <Main />,
	},
	{
		path: `*`,
		element: <Main />,
	},
]

export const featureRoutes: RouteObject[] = [
	{
		path: TOKEN,
		element: <div>Coming...</div>,
	},
]
