import Main from '../pages/main/Main'
import About from '../pages/about/About'
import Portfolio from '../pages/portfolio/Portfolio'
import Case from '../pages/case/Case'
import CasePage from '../pages/casePage/CasePage'
import { MAIN, ABOUT, TOKEN, PORTFOLIO, CASES } from '../constants/nameRoutes'
import { RouteObject, Navigate } from 'react-router-dom'

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
		path: PORTFOLIO,
		element: <Portfolio />,
	},
	{
		path: CASES,
		element: <Case />,
	},
	{
		path: `${CASES}/:name`,
		element: <CasePage />,
	},
	{
		path: `*`,
		element: <Navigate to={ABOUT} />,
	},
]

export const featureRoutes: RouteObject[] = [
	{
		path: TOKEN,
		element: <div>Coming...</div>,
	},
]
