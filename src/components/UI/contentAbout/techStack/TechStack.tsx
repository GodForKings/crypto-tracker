import React, { useState } from 'react'
import style from './TechStack.module.css'
import techStack from '../../../../constants/techStack'

const TechStack = () => {
	const [selectedTech, setSelectedTech] = useState<number>(0)
	const chooseTech = (id: number) => {
		setSelectedTech(id)
	}
	return (
		<section className={style.container}>
			<div className={style.flexBox}>
				<h2 className={style.techHeading}>technology stack</h2>
				<ul className={style.gridArea}>
					{techStack.length &&
						techStack.map(tech => (
							<li key={tech.id} className={style.techElement}>
								<h3>{tech.name}</h3>
								<button
									className={
										tech.id - 1 === selectedTech ? style.active : undefined
									}
									onClick={() => {
										chooseTech(tech.id - 1)
									}}
								>
									<img src={tech.image} className={style.techImage} />
								</button>
							</li>
						))}
				</ul>
				<p className={style.techDesc}>{techStack[selectedTech].description}</p>
			</div>
		</section>
	)
}

export default TechStack
