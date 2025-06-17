import { useEffect, FC } from 'react'
import style from './Info.module.css'
import IServiceForClient from '../../../../models/IServiceForClient'
import { useNavigate } from 'react-router-dom'
import { ABOUT } from '../../../../constants/nameRoutes'

interface IProps {
	service?: IServiceForClient
}
const Info: FC<IProps> = ({ service }) => {
	const navigate = useNavigate()

	useEffect(() => {
		window.scrollTo(0, 0)
		!service && navigate(ABOUT)
	}, [service])

	return (
		<section className={style.infoContainer}>
			{service && (
				<div className={style.boxContainer}>
					<h2>{service.name}</h2>

					<>{service.description}</>

					{service.sections.map(item => (
						<div key={item.id}>
							<span>{item.name} : </span>

							<span>{item.desc}</span>
						</div>
					))}
				</div>
			)}
		</section>
	)
}

export default Info
