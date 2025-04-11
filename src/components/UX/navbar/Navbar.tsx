import React, { FC, useEffect, useRef } from 'react'
import classes from './Navbar.module.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MAIN, ABOUT, PORTFOLIO } from '../../../constants/nameRoutes'
import logo from '../../../assets/images/logo.png'
import { gsap } from 'gsap'
import { useFilterColor } from '../../../hooks/modification'

const Navbar: FC = () => {
	const navbarRef = useRef<HTMLElement>(null)
	const logoRef = useRef<HTMLAnchorElement>(null)
	const filterColor = useFilterColor()
	useEffect(() => {
		gsap.fromTo(
			navbarRef.current,
			{
				y: '-10px',
				opacity: 0.3,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				ease: 'power4.out',
			}
		)
		gsap.to(logoRef.current, {
			x: `${gsap.utils.random(-10, 30)}px`,
			duration: 3,
			ease: 'elastic.in',
			delay: 0.5,
			yoyo: true, // Возврат к исходному положению \\
			repeat: -1,
		})
		return () => {
			gsap.killTweensOf([logoRef.current, navbarRef.current])
		}
	}, [])
	return (
		<nav className={classes.navigation} ref={navbarRef} style={filterColor}>
			<Link to={MAIN} ref={logoRef} className={classes.logoLink}>
				<img src={logo} alt='logo' />
			</Link>
			<ul className={classes.navbar}>
				<li>
					<NavLink to={MAIN}>Crypto</NavLink>
				</li>
				<li>
					<NavLink to={ABOUT}>About us</NavLink>
				</li>
				<li>
					<NavLink to={PORTFOLIO}>Portfolio</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
