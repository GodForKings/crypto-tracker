import { updateTokenPrice } from '../store/reducers/TokenSlice'
import { IAsset } from '../models/IAsset'
import { ITokenWSS } from '../models/IToken'

let socket: WebSocket
let reconnectInterval: NodeJS.Timeout | null = null

/**
 * Установка ВебСокет подключения для реал-тайм обновления графиков
 */
const setupWebSocket = (addedTokens: IAsset[], dispatch: any) => {
	if (socket) socket.close()
	if (addedTokens.length === 0) return
	const symbols = addedTokens
		.map(token => token.asset.toLowerCase() + 'usdt@ticker')
		.join('/')
	const connect = () => {
		try {
			socket = new WebSocket(
				`${process.env.REACT_APP_BINANCE_API_WEBSOCKET}/${symbols}`
			)
			socket.onmessage = event => {
				const data: ITokenWSS = JSON.parse(event.data)
				dispatch(
					updateTokenPrice({
						s: data.s.replace(/USDT$/, '') /* название пары */,
						c: Number(data.c) /* цена токена */,
					})
				)
				if (reconnectInterval) {
					clearInterval(reconnectInterval)
					reconnectInterval = null
				}
			}
			socket.onclose = () => {
				reconnect()
			}
			socket.onerror = () => {
				socket.close()
			}
		} catch (error) {
			reconnect()
			console.error(`ошибка подключения по websocket ${error}`)
		}
	}

	/* переподключение сокета */
	const reconnect = () => {
		if (reconnectInterval) return
		reconnectInterval = setInterval(() => {
			connect()
			console.log(`попытка переподключения соединения`)
		}, 5000)
	}

	connect()

	return socket
}

export default setupWebSocket
