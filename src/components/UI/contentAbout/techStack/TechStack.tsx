import React from 'react'
import style from './TechStack.module.css'
import techStack from '../../../../constants/techStack'

const TechStack = () => {
	return (
		<section className={style.container}>
			<div className={style.flexBox}>
				<h2>technology stack</h2>
				<ul className={style.gridArea}>
					{techStack.length &&
						techStack.map(tech => (
							<li key={tech.id} className={style.techElement}>
								<h3>{tech.name}</h3>
								<img src={tech.image} className={style.techImage} />
							</li>
						))}
				</ul>
			</div>
		</section>
	)
}

export default TechStack
