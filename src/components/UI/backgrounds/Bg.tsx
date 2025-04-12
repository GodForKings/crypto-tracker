import React from 'react'
import style from './Bg.module.css'
import bgMain from '../../../assets/videos/mainBg.mp4'
import bgAbout from '../../../assets/videos/aboutBg.mp4'
import { useLocation } from 'react-router-dom'
import { ABOUT } from '../../../constants/nameRoutes'

const Bg = () => {
	const locationPath = useLocation()
	return (
		<div className={style.container}>
			<video
				src={locationPath.pathname === ABOUT ? bgAbout : bgMain}
				autoPlay={true}
				muted={true}
				loop={true}
				preload='true'
				playsInline={true}
			></video>
		</div>
	)
}

export default Bg
