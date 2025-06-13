import { BG } from '../lib/constants'
import { ROUTE_NAMES } from '../../constants/nameRoutes'

export const currentBgForPage = (targetPage: string) => {
	switch (targetPage) {
		case ROUTE_NAMES.ABOUT:
			return BG.aboutBg
		case ROUTE_NAMES.MAIN:
			return BG.mainBg
		case ROUTE_NAMES.PORTFOLIO:
			return BG.darkNetBg
		default:
			return BG.darkNetBg
	}
}
