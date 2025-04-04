import React, { FC, useEffect, useState, useRef } from 'react'
import style from './Welcome.module.css'
import { ISlider } from '../../../models/ISlider'
import { gsap } from 'gsap'
import img1 from '../../../assets/images/welcome/img1.png'
import img2 from '../../../assets/images/welcome/img2.png'
import img3 from '../../../assets/images/welcome/img3.png'
import img4 from '../../../assets/images/welcome/img4.png'

const Welcome: FC = () => {
	const [activeSlide, setActiveSlide] = useState<number>(0)
	const refSlide = useRef<HTMLDivElement>(null)
	const refTitle = useRef<HTMLHeadingElement>(null)
	const sliderItems: ISlider[] = [
		{ id: 1, title: 'Your ideas are our solutions', img1: img1, img2: img2 },
		{ id: 2, title: 'We make a flame out of a spark', img1: img3, img2: img4 },
	]
	const swapSlide = () => {
		setActiveSlide(prev => (sliderItems.length - 1 > prev ? prev + 1 : 0))
	}
	useEffect(() => {
		const timer = setInterval(() => {
			swapSlide()
		}, 6000)
		return () => clearInterval(timer)
	}, [])
	useEffect(() => {
		const tl = gsap.timeline()
		refSlide.current &&
			tl
				.fromTo(
					refSlide.current,
					{ opacity: 0, x: '300px' },
					{
						opacity: 1,
						x: 0,
						ease: 'power3.inOut',
						duration: 2,
					}
				)
				.fromTo(
					refTitle.current,
					{ color: '#5555ff', y: '-300px', opacity: 0 },
					{
						color: '#0bcf01',
						duration: 1,
						ease: 'power2.out',
						y: 0,
						opacity: 1,
					}
				)
	}, [activeSlide])
	return (
		<section className={style.container}>
			<div className={style.headSlide}>
				<h1 className={style.titleSlide} ref={refTitle}>
					<span>{sliderItems[activeSlide].title}</span>
				</h1>
				<div
					key={sliderItems[activeSlide].id}
					className={style.focusSlide}
					ref={refSlide}
				>
					<div>
						<img src={sliderItems[activeSlide].img1} />
					</div>
					<div>
						<img src={sliderItems[activeSlide].img2} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Welcome
