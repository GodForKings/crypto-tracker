import { FC } from 'react'
import style from './Main.module.css'
import { Bg } from '../../components/UI/backgrounds/Bg'
import Navbar from '../../components/UX/navbar/Navbar'
import InfoBlock from '../../components/UI/contentMain/infoBlock/InfoBlock'
import Footer from '../../components/UX/footer/Footer'
import BottomBag from '../../components/UI/contentMain/bottomBag/BottomBag'

const Main: FC = () => {
	return (
		<main className={style.mainContainer}>
			<Navbar />

			<InfoBlock />

			<BottomBag />

			<Footer />

			<Bg />
		</main>
	)
}

export default Main
