import React, { FC, useEffect, useRef } from 'react'
import style from './Footer.module.css'
import tg from '../../../assets/svg/tgGreen.svg'
import gitHub from '../../../assets/svg/greenGit.svg'
import { gsap } from 'gsap'
import { useFilterColor } from '../../../hooks/modification'

const Footer: FC = () => {
	const refList = useRef<HTMLUListElement>(null)
	const refFooter = useRef<HTMLElement>(null)
	const filterColor = useFilterColor()
	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: refFooter.current,
				start: 'top+=50 bottom',
				once: true,
			},
		})
		if (refList.current && refFooter.current) {
			tl.fromTo(
				refList.current,
				{
					background: '#212121',
					opacity: 0,
					x: '400px',
				},
				{
					x: '0',
					duration: 2.5,
					opacity: 1,
					background: '#000',
					ease: 'power3.out',
				}
			)
		}
		return () => {
			tl.kill()
		}
	}, [])
	return (
		<footer
			className={style.footerContainer}
			ref={refFooter}
			style={filterColor}
		>
			<ul className={style.footerList} ref={refList}>
				<h2 className={style.footerContacts}>Contacts</h2>
				<li>
					<a
						href='https://t.me/GodForKings'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={tg} alt='telegram icon' />
					</a>
				</li>
				<li>
					<a
						href='https://github.com/GodForKings'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img src={gitHub} alt='gitHub icon' />
					</a>
				</li>
			</ul>
		</footer>
	)
}

export default Footer
