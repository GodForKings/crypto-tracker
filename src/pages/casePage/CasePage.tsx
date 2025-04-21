import React, { FC, useEffect, useRef } from 'react'
import style from './CasePage.module.css'
import Navbar from '../../components/UX/navbar/Navbar'
import Footer from '../../components/UX/footer/Footer'
import { useLocation, useParams } from 'react-router-dom'
import Info from '../../components/UI/contentCasePage/info/Info'
import services from '../../constants/servicesForClient'
import IServiceForClient from '../../models/IServiceForClient'
import { useFilterColor } from '../../hooks/modification'

const CasePage = () => {
	const filterStyle = useFilterColor()
	const location = useLocation()
	const { name } = useParams()
	const service: IServiceForClient | undefined = services.find(
		el => el.name.toLowerCase().replace(' ', '') === name
	)
	useEffect(() => {}, [])
	console.log(location)
	return (
		<main className={style.container} style={filterStyle}>
			<Navbar />
			<Info service={service}></Info>
			<Footer />
		</main>
	)
}

export default CasePage
