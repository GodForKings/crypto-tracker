import aboutBg from '../../assets/videos/aboutBg.mp4'
import darkNetBg from '../../assets/videos/darkNetBg.mp4'
import mainBg from '../../assets/videos/mainBg.mp4'

/**
 * backgrounds - для страниц
 */
export const BG = {
	aboutBg,
	darkNetBg,
	mainBg,
} as const
export type BG = (typeof BG)[keyof typeof BG]
