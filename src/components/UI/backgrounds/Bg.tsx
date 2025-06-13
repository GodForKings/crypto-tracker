import { useLocation } from 'react-router-dom'

import style from './Bg.module.css'

import { currentBgForPage } from '../../../shared'

export const Bg = () => {
	const { pathname } = useLocation()

	return (
		<div className={style.container}>
			<video
				src={currentBgForPage(pathname)}
				autoPlay={true}
				muted={true}
				loop={true}
				preload='true'
				playsInline={true}
			/>
		</div>
	)
}
