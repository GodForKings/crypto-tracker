import { FC, useEffect, useRef, useState } from 'react'
import classes from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { MAIN, ABOUT, CASES } from '../../../constants/nameRoutes'
import logo from '../../../assets/images/logo.png'
import { gsap } from 'gsap'
import { useFilterColor } from '../../../hooks/modification'

const Navbar: FC = () => {
	const filterColor = useFilterColor()
	const [burgerActive, setBurgerActive] = useState<boolean>(false)
	const navbarRef = useRef<HTMLElement>(null)
	const logoRef = useRef<HTMLAnchorElement>(null)
	const spanRefs = useRef<HTMLSpanElement[]>([])
	const navigationRef = useRef<HTMLUListElement>(null)

	/* Для анимации logo */
	useEffect(() => {
		const logo = logoRef.current
		const nav = navbarRef.current
		gsap.fromTo(
			nav,
			{
				y: '-5px',
				opacity: 0.3,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.5,
				ease: 'power3.out',
			}
		)
		gsap.to(logo, {
			x: `${gsap.utils.random(-10, 30)}px`,
			duration: 3,
			ease: 'elastic.in',
			delay: 3,
			yoyo: true, // Возврат к исходному положению \\
			repeat: -1,
		})
		return () => {
			gsap.killTweensOf([logo, nav])
		}
	}, [])

	const addElInArr = (element: HTMLSpanElement): void => {
		if (element && !spanRefs.current.includes(element)) {
			spanRefs.current.push(element)
		}
	}

	const changeBurgerMenu = () => {
		const tl = gsap.timeline({
			onStart: () => setBurgerActive(!burgerActive),
		})
		if (!burgerActive && spanRefs.current.length) {
			tl.to(spanRefs.current[0], {
				position: 'absolute',
				transform: 'rotate(45deg)',
				duration: 0.1,
				ease: 'back.in',
			})
				.to(spanRefs.current[1], { scale: 0, duration: 0.1, ease: 'back.in' })
				.to(spanRefs.current[2], {
					position: 'absolute',
					transform: 'rotate(-45deg)',
					width: '100%',
					duration: 0.1,
					ease: 'back.in',
				})
				.fromTo(
					navigationRef.current,
					{ x: '-100vw' },
					{ x: 0, duration: 0.3, ease: 'elastic.inOut' }
				)
		} else {
			tl.to(spanRefs.current[0], {
				position: 'static',
				transform: 'rotate(0deg)',
				duration: 0.1,
				ease: 'back.in',
			})
				.to(spanRefs.current[1], { scale: 1, duration: 0.1, ease: 'back.in' })
				.to(spanRefs.current[2], {
					position: 'static',
					transform: 'rotate(0deg)',
					width: '80%',
					duration: 0.1,
					ease: 'back.in',
				})
		}
	}

	return (
		<nav className={classes.navigation} ref={navbarRef} style={filterColor}>
			<Link to={MAIN} ref={logoRef} className={classes.logoLink}>
				<img src={logo} alt='logo' />
			</Link>

			<div className={classes.burgerMenu}>
				<button onClick={changeBurgerMenu}>
					<span ref={addElInArr} />
					<span ref={addElInArr} />
					<span ref={addElInArr} />
				</button>
			</div>

			<ul
				ref={navigationRef}
				className={`${classes.navbar} ${burgerActive ? classes.activeNav : ''}`}
			>
				<li>
					<NavLink to={MAIN}>Crypto</NavLink>
				</li>

				<li>
					<NavLink to={ABOUT}>About us</NavLink>
				</li>

				{/* <li>
					<NavLink to={PORTFOLIO}>Portfolio</NavLink>
				</li> */}

				<li>
					<NavLink to={CASES}>Service</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
