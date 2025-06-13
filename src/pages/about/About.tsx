import { FC } from 'react'
import style from './About.module.css'
import Navbar from '../../components/UX/navbar/Navbar'
import { Bg } from '../../components/UI/backgrounds/Bg'
import Footer from '../../components/UX/footer/Footer'
import Welcome from '../../components/UI/contentAbout/welcome/Welcome'
import TechStack from '../../components/UI/contentAbout/techStack/TechStack'

const About: FC = () => {
	return (
		<main className={style.about__container}>
			<Navbar />

			<Welcome />

			<TechStack />

			<Bg />

			<Footer />
		</main>
	)
}

export default About
