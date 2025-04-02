import { updateTokenPrice } from '../store/reducers/TokenSlice'
import { IAsset } from '../models/IAsset'
import { ITokenWSS } from '../models/IToken'
import { error } from 'console'

let socket: WebSocket

const setupWebSocket = (addedTokens: IAsset[], dispatch: any) => {
	if (socket) socket.close()
	if (addedTokens.length === 0) return
	const symbols = addedTokens
		.map(token => token.asset.toLowerCase() + 'usdt@ticker')
		.join('/')

	try {
		socket = new WebSocket(
			`${process.env.REACT_APP_BINANCE_API_WEBSOCKET}/${symbols}`
		)
		socket.onmessage = event => {
			const data: ITokenWSS = JSON.parse(event.data)
			dispatch(
				updateTokenPrice({
					s: data.s.replace(/USDT$/, ''), // название пары
					c: Number(data.c), // цена токена
				})
			)
		}
		socket.onclose = () => {}
		socket.onerror = () => {}
	} catch (error) {
		console.error('WebSocket error:', error)
	}

	return socket
}

export default setupWebSocket
