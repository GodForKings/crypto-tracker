import { FC } from 'react'
import classes from './Loader.module.css'

const Loader: FC = () => {
	return (
		<div className={classes.center}>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
			<div className={classes.wave}></div>
		</div>
	)
}

export default Loader
