import React, { FC, useCallback, useMemo, useState } from 'react'
import style from './SelectToken.module.css'
import { IToken } from '../../../../models/IToken'
import SquareButton from '../../buttons/squareButton/SquareButton'
import { useAppDispatch } from '../../../../hooks/redux'
import { tokenInAssets } from '../../../../store/reducers/TokenSlice'
import { COLORGREEN, COLORED } from '../../../../constants/colors'

interface ISelected {
	show: boolean
	disabledShow: () => void
	tokens: IToken[]
}

const SelectToken: FC<ISelected> = ({ show, disabledShow, tokens }) => {
	const [title, setTitle] = useState<string>('')
	const [count, setCount] = useState<number>(0)
	const [showCount, setShowCount] = useState<boolean>(false)
	const [targetToken, setTargetToken] = useState<IToken>()
	const dispatch = useAppDispatch()
	const removeStates = () => {
		setTitle('')
		setCount(0)
		setShowCount(false)
		disabledShow()
	}
	const sortedTokens = useMemo(() => {
		return tokens.filter(token =>
			token.symbol.toUpperCase().includes(title.toUpperCase())
		)
	}, [title, tokens])
	const changeTargetToken = (token: IToken) => {
		setTargetToken(token)
		setShowCount(true)
	}

	const handleAddTokenInAssets = useCallback(() => {
		if (typeof targetToken === 'object' && count > 0) {
			const updateToken: IToken = {
				...targetToken,
				quantity: Number(count),
			}
			dispatch(tokenInAssets(updateToken))
		}
	}, [targetToken, count])

	return (
		<div
			className={
				show
					? `${style.modalContainer} ${style.activeModal}`
					: style.modalContainer
			}
			onClick={removeStates}
		>
			<div className={style.modalForm} onClick={e => e.stopPropagation()}>
				<div className={style.inputBox}>
					<input
						name='tokenName'
						placeholder='search tokens'
						type='text'
						value={title}
						onChange={e => {
							setTitle(e.target.value)
						}}
					/>
				</div>
				<div className={style.token__container}>
					{sortedTokens.map(token => (
						<div key={token.symbol}>
							<a
								href={`#${token.symbol}`}
								onClick={() => changeTargetToken(token)}
							>
								<span>{token.symbol}</span>
								<span
									style={
										token.priceChangePercent < 0
											? { color: COLORED }
											: { color: COLORGREEN }
									}
								>
									{token.priceChangePercent}%
								</span>
								<span>${token.lastPrice}</span>
							</a>
						</div>
					))}
					<div className={showCount ? style.active : style.disabledInput}>
						<p>
							{targetToken?.symbol} ${targetToken?.lastPrice}
						</p>
						<div className={style.inputBox}>
							<input
								name='tokenCount'
								placeholder='ur quantity'
								type='number'
								value={count}
								required
								max={1000}
								min={1}
								onChange={e => {
									setCount(Number(e.target.value))
								}}
							/>
						</div>
						<div className={style.countContainer}>
							<SquareButton onClick={handleAddTokenInAssets}>add</SquareButton>
							<SquareButton onClick={removeStates}>cancel</SquareButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SelectToken
