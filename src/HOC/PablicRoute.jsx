import React from 'react'
import { useSelector } from 'react-redux'

import { Navigate } from 'react-router-dom'
import { selectIsAuthenticated } from 'redux/auth/selectors'

export const PublicRoute = ({ children }) => {
	const isAuthenticated = useSelector(selectIsAuthenticated)
	if (isAuthenticated) {
		return <Navigate to='/' />
	}
	return children
}
