import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiTokens } from '../api/apiSlice'
import tokenReducer from './reducers/TokenSlice'

const rootReducer = combineReducers({
	tokenReducer,
	[apiTokens.reducerPath]: apiTokens.reducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(apiTokens.middleware),
	})
}

type AppStore = ReturnType<typeof setupStore>

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
