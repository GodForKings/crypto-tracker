import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IToken, ITokenWSS } from '../../models/IToken'
import { apiTokens } from '../../api/apiSlice'
import { IAsset } from '../../models/IAsset'

interface TokenState {
	tokens: IToken[]
	isLoading: boolean
	error: string
	addedTokens: IAsset[]
	cart: number
}

const initialState: TokenState = {
	addedTokens: [],
	tokens: [],
	isLoading: false,
	error: ``,
	cart: 0,
}

export const tokenSlice = createSlice({
	name: 'tokens',
	initialState,
	reducers: {
		checkLocal(state) {
			if (localStorage.getItem('my_assets')) {
				try {
					state.addedTokens = [
						...JSON.parse(localStorage.getItem('my_assets') as string),
					]
					tokenSlice.caseReducers.fixedCart(state)
				} catch (error) {
					state.error =
						typeof error === 'string' ? error : `this is error in local storage`
					localStorage.removeItem('my_assets')
				}
			}
		},
		walletClear(state) {
			state.addedTokens = []
			state.cart = 0
			localStorage.removeItem('my_assets')
		},
		walletDeleteToken(state, action: PayloadAction<string>) {
			state.addedTokens = [
				...state.addedTokens.filter(token => token.asset !== action.payload),
			]
			tokenSlice.caseReducers.fixedCart(state)
		},
		tokenInAssets(state, action: PayloadAction<IToken>) {
			// Проверяем наличие токена в портфеле
			const checkToken = state.addedTokens.find(
				el => el.asset === action.payload.symbol
			)
			if (!checkToken) {
				state.addedTokens.push({
					asset: action.payload.symbol,
					quantity: action.payload.quantity,
					price: action.payload.lastPrice,
					totalCost: action.payload.lastPrice * action.payload.quantity,
					changeDay: action.payload.priceChangePercent,
					sliceInBug: 0,
				})
			} else {
				checkToken.price = action.payload.lastPrice
				checkToken.quantity += action.payload.quantity
				checkToken.totalCost = action.payload.lastPrice * checkToken.quantity
			}
			tokenSlice.caseReducers.fixedCart(state)
		},
		// Перерасчет Всего портфеля \\
		fixedCart(state) {
			state.cart = Number(
				state.addedTokens.reduce((acc, el) => {
					acc += el.totalCost
					return acc
				}, 0)
			)
			state.addedTokens.forEach(
				token => (token.sliceInBug = token.totalCost / state.cart)
			)
			// Актуализация портфеля в Локальном хранилище \\
			localStorage.setItem('my_assets', JSON.stringify(state.addedTokens))
		},
		updateTokenPrice(state, action: PayloadAction<ITokenWSS>) {
			state.addedTokens.forEach(token => {
				if (token.asset === action.payload.s) {
					token.price = action.payload.c
					token.totalCost = token.quantity * action.payload.c
				}
			})
			tokenSlice.caseReducers.fixedCart(state)
		},
	},
	extraReducers: builder => {
		builder.addMatcher(
			apiTokens.endpoints.fetchAllTokens.matchFulfilled,
			(state, action: PayloadAction<IToken[]>) => {
				state.tokens = action.payload.filter(
					element => element.symbol.includes('USDT') && element.lastPrice > 0
					//сохраняем только пары с USDT и те которые ещё торгуются \\
				)
				state.tokens = state.tokens.map(token => {
					return {
						...token,
						symbol: token.symbol.replace(/USDT$/, ''), // Меняем окончание на пустую строку
						lastPrice: Number(token.lastPrice.toString()), // Убираем нули в конце
					}
				})
				tokenSlice.caseReducers.checkLocal(state)
			}
		)
	},
})

export const {
	walletClear,
	walletDeleteToken,
	tokenInAssets,
	checkLocal,
	updateTokenPrice,
} = tokenSlice.actions
export default tokenSlice.reducer
