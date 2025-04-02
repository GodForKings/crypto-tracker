import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IToken } from '../models/IToken'

// получение информации по монетам
export const apiTokens = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BINANCE_API_HTTPS,
	}),
	endpoints: build => ({
		// Получить все токены \\
		fetchAllTokens: build.query<IToken[], void>({
			query: () => ({
				url: '/ticker/24hr',
			}),
		}),
		//Для соло запроса токена \\
		fetchTokensInAssets: build.query<IToken[], string>({
			query: (asset: string) => ({
				url: '/ticker/24hr',
				params: {
					symbol: asset,
				},
			}),
		}),
	}),
})
