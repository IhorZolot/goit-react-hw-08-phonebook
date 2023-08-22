import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { selectIsAuthenticated } from 'redux/auth/selectors'

export const PrivateRoute = ({ children }) => {
	const location = useLocation()
	const isAuthenticated = useSelector(selectIsAuthenticated)
	if (isAuthenticated) {
		return children
	}
	return <Navigate to='/login' state={{ from: location }} />
}
