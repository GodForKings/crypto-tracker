import React, { useState, useRef, useEffect } from 'react'
import style from './TechStack.module.css'
import techStack from '../../../../constants/techStack'
import { gsap } from 'gsap'

const TechStack = () => {
	const [selectedTech, setSelectedTech] = useState<number>(0)
	const refSection = useRef<HTMLElement>(null)
	const refTechHeading = useRef<HTMLHeadingElement>(null)
	const refGrid = useRef<HTMLUListElement>(null)
	const refDesc = useRef<HTMLParagraphElement>(null)
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: refSection.current,
				start: 'top+=200px bottom',
			},
		})
		tl.fromTo(
			refTechHeading.current,
			{ opacity: 0, x: '-100%' },
			{ opacity: 1, x: 0, ease: 'back', duration: 1.3 }
		)
			.fromTo(
				refGrid.current,
				{ scale: 0 },
				{ scale: 1, duration: 1, ease: 'back' }
			)
			.fromTo(
				refDesc.current,
				{ x: '100%', opacity: 0 },
				{ x: 0, opacity: 1, duration: 1, ease: 'back' }
			)
		return () => {
			tl.kill()
		}
	}, [])
	const chooseTech = (id: number) => {
		if (!refDesc.current) return
		const tl = gsap.timeline({
			onUpdate: () => {
				setSelectedTech(id)
			},
		})
		tl.fromTo(
			refDesc.current,
			{ opacity: 0, scaleY: 0 },
			{ opacity: 1, scaleY: 1, duration: 1, ease: 'power3.out' }
		)
	}
	return (
		<section className={style.container} ref={refSection}>
			<div className={style.flexBox}>
				<h2 className={style.techHeading} ref={refTechHeading}>
					technology stack
				</h2>
				<ul className={style.gridArea} ref={refGrid}>
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
				<p className={style.techDesc} ref={refDesc}>
					{techStack[selectedTech].description}
				</p>
			</div>
		</section>
	)
}

export default TechStack
