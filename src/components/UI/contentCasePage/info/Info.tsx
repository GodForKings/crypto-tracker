import React from 'react'
import style from './Info.module.css'
import IServiceForClient from '../../../../models/IServiceForClient'

interface IProps {
	service?: IServiceForClient
}
const Info: React.FC<IProps> = ({ service }) => {
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
