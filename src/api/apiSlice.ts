import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IToken } from '../models/IToken'

/**
 * Апи для работы со списком монет на бирже
 */
export const apiTokens = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_BINANCE_API_HTTPS,
	}),
	endpoints: build => ({
		/**
		 * Получить все существующие токены на бирже
		 */
		fetchAllTokens: build.query<IToken[], void>({
			query: () => ({
				url: '/ticker/24hr',
			}),
		}),
		/**
		 * Получить конкретную токен-пару
		 */
		freshPrice: build.query<IToken[], string>({
			query: (asset: string) => ({
				url: '/ticker/24hr',
				params: {
					symbol: asset,
				},
			}),
		}),
	}),
})
