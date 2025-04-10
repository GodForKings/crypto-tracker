import React, { FC } from 'react'
import style from './Portfolio.module.css'
import Navbar from '../../components/UX/navbar/Navbar'
import Footer from '../../components/UX/footer/Footer'
import Demo from '../../components/UI/contentPortfolio/demo/Demo'
import Hello from '../../components/UI/contentPortfolio/hello/Hello'

const Portfolio: FC = () => {
	return (
		<main className={style.container}>
			<Navbar />
			<Hello />
			<Demo />
			<Footer />
		</main>
	)
}

export default Portfolio
