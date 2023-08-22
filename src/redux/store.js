import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { contactsReducer } from './contacts/contactsSlice'
import { authReducer } from './auth/authSlice'

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	blacklist: ['filter'],
}
const persistConfigUser = {
	key: 'user',
	version: 1,
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)
const persistedAuthReducer = persistReducer(persistConfigUser, authReducer)

export const store = configureStore({
	reducer: {
		contacts: persistedReducer,
		auth: persistedAuthReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
