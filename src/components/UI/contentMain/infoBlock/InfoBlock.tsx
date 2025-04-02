import React, { useState, FC, useEffect, useRef } from 'react'
import style from './InfoBlock.module.css'
import SquareButton from '../../buttons/squareButton/SquareButton'
import { apiTokens } from '../../../../api/apiSlice'
import Loader from '../../loader/Loader'
import SelectToken from '../../modals/selectToken/SelectToken'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { COLORED, COLORGREEN } from '../../../../constants/colors'
import imgDelete from '../../../../assets/svg/delete.svg'
import { walletDeleteToken } from '../../../../store/reducers/TokenSlice'
import setupWebSocket from '../../../../service/tokenPriceWSS'
import { gsap } from 'gsap'

const InfoBlock: FC = () => {
	const [showSelect, setShowSelect] = useState<boolean>(false)
	const { error, isLoading, refetch } = apiTokens.useFetchAllTokensQuery()
	const { tokens, addedTokens } = useAppSelector(state => state.tokenReducer)
	const refInfo = useRef(null)
	const formatter = new Intl.NumberFormat('en-US')
	const dispatch = useAppDispatch()
	useEffect(() => {
		const socket = setupWebSocket(addedTokens, dispatch)
		return () => {
			if (socket) {
				socket.close()
			}
		}
	}, [addedTokens])
	useEffect(() => {
		gsap.fromTo(
			refInfo.current,
			{
				opacity: 0,
			},
			{ opacity: 1, duration: 2, ease: 'power3.out', delay: 0.2 }
		)
	}, [])
	return (
		<section className={style.container}>
			{isLoading && <Loader />}
			{error && <h2>sorry, it's error.Try reload</h2>}
			<div className={style.bag} ref={refInfo}>
				<ul className={style.badGrid}>
					<li>asset</li>
					<li>quantity</li>
					<li>price</li>
					<li>total cost</li>
					<li>24h Change</li>
					<li>% wallet</li>
				</ul>
				{addedTokens.map(token => (
					<ul key={token.asset} className={style.badGrid}>
						<li>{token.asset}</li>
						<li>{token.quantity}</li>
						<li>${token.price}</li>
						<li>
							$
							{token.totalCost > 1
								? formatter.format(Number(token.totalCost.toFixed(3)))
								: token.totalCost.toFixed(6)}
						</li>
						<li
							style={
								token.changeDay < 0 ? { color: COLORED } : { color: COLORGREEN }
							}
						>
							{token.changeDay}%
						</li>
						<li>
							{token.sliceInBug * 100 >= 0.01
								? (token.sliceInBug * 100).toFixed(2)
								: `<  0.01`}
							%
						</li>
						<li>
							<button
								className={style.btnRemove}
								onClick={() => dispatch(walletDeleteToken(token.asset))}
							>
								<img src={imgDelete} />
							</button>
						</li>
					</ul>
				))}
			</div>
			<SquareButton
				onClick={() => setShowSelect(true)}
				className={style.fixedBtn}
			>
				ADD Token
			</SquareButton>
			<SelectToken
				tokens={tokens}
				show={showSelect}
				disabledShow={() => setShowSelect(false)}
			></SelectToken>
		</section>
	)
}

export default InfoBlock

// 1. Список активов:
// Отображается таблица или карточки с полями:
// Название (например, "Bitcoin").
// Количество (например, 0.50).
// Текущая цена (например, $60,000.00).
// Общая стоимость (например, $30,000.00).
// Изменение за 24 часа (например, +2.5% или -1.8%).
// Доля в портфеле (например, 75%).

// 2. Форма:
// Список доступных активов.
// Возможность установить количество.
// Кнопки для сброса и добавления.

// 3. Добавление и локальное сохранение:
// Добавление обновляет список.
// Данные сохраняются локально и восстанавливаются при загрузке страницы.

// 5. Real-time обновления:
// Цены активов обновляются через WebSocket автоматически.

// 6. Оптимизация и доступность:
// Список поддерживает сотни активов без потери производительности.
// Интерфейс доступен для клавиатурной навигации и screen readers
