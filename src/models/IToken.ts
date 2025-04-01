export interface IToken {
	symbol: string
	priceChangePercent: number
	lastPrice: number
	lowPrice: string
	highPrice: string
	lastId: number
	quantity: number
}

export interface ITokenWSS {
	s: string // торговая пара
	c: number // искомая цена
}
