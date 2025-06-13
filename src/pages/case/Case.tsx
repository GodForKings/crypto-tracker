import { FC } from 'react'
import style from './Case.module.css'
import Navbar from '../../components/UX/navbar/Navbar'
import Footer from '../../components/UX/footer/Footer'
import Welcome from '../../components/UI/ContentCase/welcome/Welcome'
import Viewing from '../../components/UI/ContentCase/viewing/Viewing'
import AnotherWelcome from '../../components/UI/contentAbout/welcome/Welcome'
import { Bg } from '../../components/UI/backgrounds/Bg'

const Case: FC = () => {
	return (
		<main className={style.container}>
			<Navbar />

			<AnotherWelcome />

			<Viewing />

			<Welcome />

			<Bg />

			<Footer />
		</main>
	)
}

export default Case
