import React, { FC } from 'react'
import style from './Footer.module.css'

const Footer: FC = () => {
	return (
		<footer className={style.footerContainer}>
			<ul className={style.footerList}>
				<li>something link</li>
				<li>something thens</li>
			</ul>
		</footer>
	)
}

export default Footer
