import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ContactBook } from './pages/contactBook/ContactBook'
import { RegisterForm } from './pages/registerForm/RegisterForm'
import { LoginForm } from './pages/loginForm/LoginForm'
import { Layout } from './Layout'
import { UserMenu } from './pages/userMenu/UserMenu'
import { NotFound } from './pages/NotFound'
import { PrivateRoute } from 'HOC/PrivateRoute'
import { PublicRoute } from 'HOC/PablicRoute'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from 'redux/auth/operations'
import { selectRefresh } from 'redux/auth/selectors'

export const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])
	const isRefresh = useSelector(selectRefresh)
	return isRefresh ? (
		<h2>Loading</h2>
	) : (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route
					index
					element={
						<PrivateRoute>
							<ContactBook />
						</PrivateRoute>
					}
				/>
				<Route
					path='register'
					element={
						<PublicRoute>
							<RegisterForm />
						</PublicRoute>
					}
				/>
				<Route
					path='login'
					element={
						<PublicRoute>
							<LoginForm />
						</PublicRoute>
					}
				/>
				<Route path='menu' element={<UserMenu />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
