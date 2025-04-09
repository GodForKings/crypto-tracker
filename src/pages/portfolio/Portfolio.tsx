import React from 'react'
import style from './Portfolio.module.css'
import Navbar from '../../components/UX/navbar/Navbar'
import Footer from '../../components/UX/footer/Footer'

const Portfolio = () => {
	return (
		<main className={style.container}>
			<Navbar />
			<Footer />
		</main>
	)
}

export default Portfolio
