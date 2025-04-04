import React, { FC } from 'react'
import style from './About.module.css'
import Navbar from '../../components/UX/navbar/Navbar'
import Bg from '../../components/UI/backgrounds/Bg'
import Footer from '../../components/UX/footer/Footer'
import ContentAbout from '../../components/UI/contentAbout/Welcome'
import Welcome from '../../components/UI/contentAbout/Welcome'

const About: FC = () => {
	return (
		<div className={style.about__container}>
			<Navbar />
			<Welcome />
			<Bg />
			<Footer />
		</div>
	)
}

export default About
