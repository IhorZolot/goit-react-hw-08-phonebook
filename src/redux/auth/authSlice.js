import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './operations'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: {
			name: '',
			email: '',
		},
		token: '',
		error: '',
		isAuthenticated: false,
		isRefreshing: false,
	},
	extraReducers: builder => {
		builder
			.addCase(registerThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.user.name
				state.user.email = payload.user.email
				state.token = payload.token
				state.isAuthenticated = true
			})
			.addCase(refreshThunk.fulfilled, (state, { payload }) => {
				state.user = payload
				state.isAuthenticated = true
				state.isRefreshing = false
			})
			.addCase(refreshThunk.pending, (state, { payload }) => {
				state.isRefreshing = true
			})
			.addCase(loginThunk.fulfilled, (state, { payload }) => {
				state.user.name = payload.user.name
				state.user.email = payload.user.email
				state.token = payload.token
				state.isAuthenticated = true
			})
			.addCase(refreshThunk.rejected, (state, { payload }) => {
				console.log(payload)
				state.isRefreshing = false
			})
			.addCase(logoutThunk.fulfilled, (state, { payload }) => {
				state.user = {
					name: '',
					email: '',
				}
				state.token = ''
				state.isAuthenticated = false
			})
	},
})
export const authReducer = authSlice.reducer
