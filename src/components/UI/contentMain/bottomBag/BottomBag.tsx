import React from 'react'
import style from './BottomBag.module.css'
import { useAppSelector } from '../../../../hooks/redux'
import SquareButton from '../../buttons/squareButton/SquareButton'
import { useAppDispatch } from '../../../../hooks/redux'
import { walletClear } from '../../../../store/reducers/TokenSlice'

const BottomBag = () => {
	const formatter = new Intl.NumberFormat('en-US')
	const cartPrice = useAppSelector(state => state.tokenReducer.cart)
	const dispatch = useAppDispatch()
	return (
		<section className={style.bottomBagContainer}>
			<SquareButton
				className={style.clearBtn}
				onClick={() => dispatch(walletClear())}
				disabled={cartPrice > 0 ? false : true}
			>
				Clear
			</SquareButton>
			<div className={style.bagContent}>
				<h3>Your portfolio </h3>
				<span>$ {formatter.format(cartPrice)}</span>
			</div>
		</section>
	)
}

export default BottomBag
