import React from 'react'
import style from './Case.module.css'
import Navbar from '../../components/UX/navbar/Navbar'
import Footer from '../../components/UX/footer/Footer'
import Welcome from '../../components/UI/ContentCase/welcome/Welcome'
import Viewing from '../../components/UI/ContentCase/viewing/Viewing'
import AnotherWelcome from '../../components/UI/contentAbout/welcome/Welcome'

const Case = () => {
	return (
		<main className={style.container}>
			<Navbar />
			<Welcome />
			<AnotherWelcome />
			<Viewing />
			<Footer />
		</main>
	)
}

export default Case
