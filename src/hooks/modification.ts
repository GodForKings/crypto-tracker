import { useLocation } from 'react-router-dom'
import { ABOUT, PORTFOLIO, CASES } from '../constants/nameRoutes'
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
		case CASES:
			return {
				filter: 'hue-rotate(150deg)',
			}
		case `${CASES}/*`:
			return {
				opacity: 0,
			}
		default:
			return {
				filter: 'hue-rotate(0deg)',
			}
	}
}

export { useFilterColor }
