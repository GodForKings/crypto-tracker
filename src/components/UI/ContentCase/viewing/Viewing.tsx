import React from 'react'
import style from './Viewing.module.css'
import services from '../../../../constants/servicesForClient'
import { useNavigate } from 'react-router-dom'
import { CASES } from '../../../../constants/nameRoutes'

const Viewing = () => {
	const navigate = useNavigate()
	const redirectToService = (name: string) => {
		navigate(`${CASES}/${name}`)
	}
	return (
		<section className={style.container}>
			{services.map(service => (
				<button
					key={service.id}
					className={style.service}
					onClick={() => redirectToService(service.name)}
				>
					<h3>{service.name}</h3>
					<div>{service.description}</div>
					<div>
						{service.sections.map(item => (
							<div key={item.id}>
								{item.name} {item.desc}
							</div>
						))}
					</div>
				</button>
			))}
		</section>
	)
}

export default Viewing
