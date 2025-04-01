import React, { FC, useEffect, useRef } from 'react'
import classes from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { MAIN, ABOUT } from '../../../constants/nameRoutes'
import logo from '../../../assets/images/logo.png'
import { gsap, random } from 'gsap'

const Navbar: FC = () => {
	const navbarRef = useRef<HTMLElement>(null)
	const logoRef = useRef<HTMLAnchorElement>(null)
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
			x: `${gsap.utils.random(-10, 50)}px`,
			duration: 3,
			ease: 'elastic.in',
			delay: 0.5,
			yoyo: true, // Возврат к исходному положению
			repeat: -1,
		})
		return () => {
			gsap.killTweensOf([logoRef.current, navbarRef.current])
		}
	}, [])
	return (
		<nav className={classes.navigation} ref={navbarRef}>
			<Link to={MAIN} ref={logoRef} className={classes.logoLink}>
				<img src={logo} alt='logo' />
			</Link>
			<ul className={classes.navbar}>
				<li>
					<NavLink to={MAIN}>General</NavLink>
				</li>
				<li>
					<NavLink to={ABOUT}>About us</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
