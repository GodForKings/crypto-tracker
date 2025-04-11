import { useLocation } from 'react-router-dom'
import { ABOUT, PORTFOLIO } from '../constants/nameRoutes'
import { CSSProperties } from 'react'

const useFilterColor = (): CSSProperties => {
	const location = useLocation()
	switch (location.pathname) {
		case ABOUT:
			return {
				filter: 'hue-rotate(105deg)',
			}
		case PORTFOLIO:
			return {
				filter: 'hue-rotate(200deg)',
			}
		default:
			return {
				filter: 'hue-rotate(0deg)',
			}
	}
}

export { useFilterColor }
