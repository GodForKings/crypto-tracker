import { useEffect, FC, useRef } from 'react'
import style from './BottomBag.module.css'
import { useAppSelector, useAppDispatch } from '../../../../hooks/redux'
import SquareButton from '../../buttons/squareButton/SquareButton'
import { walletClear } from '../../../../store/reducers/TokenSlice'
import { gsap } from 'gsap'

const BottomBag: FC = () => {
	const formatter = new Intl.NumberFormat('en-US')
	const cartPrice = useAppSelector(state => state.tokenReducer.cart)
	const dispatch = useAppDispatch()
	const refBag = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const currentBag: HTMLDivElement | null = refBag.current
		gsap.fromTo(
			currentBag,
			{
				x: '-100%',
			},
			{ x: 0, duration: 1.5, ease: 'power3.out' }
		)
		return () => {
			gsap.killTweensOf(currentBag)
		}
	}, [])

	return (
		<section className={style.bottomBagContainer}>
			<div className={style.bagContent} ref={refBag}>
				<div className={style.cartPrice}>
					<h3>Your portfolio </h3>

					<span>$ {formatter.format(cartPrice)}</span>
				</div>

				{cartPrice > 0 && (
					<SquareButton
						className={style.clearBtn}
						onClick={() => dispatch(walletClear())}
						disabled={cartPrice > 0 ? false : true}
					>
						Clear
					</SquareButton>
				)}
			</div>
		</section>
	)
}

export default BottomBag
