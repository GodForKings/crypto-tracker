import React, { FC } from 'react'
import style from './About.module.css'
import Navbar from '../../components/UX/navbar/Navbar'
import Bg from '../../components/UI/backgrounds/Bg'
import Footer from '../../components/UX/footer/Footer'
import ContentAbout from '../../components/UI/contentAbout/ContentAbout'

const About: FC = () => {
	return (
		<div className={style.about__container}>
			<Navbar />
			<ContentAbout />
			<Bg />
			<Footer />
		</div>
	)
}

export default About
