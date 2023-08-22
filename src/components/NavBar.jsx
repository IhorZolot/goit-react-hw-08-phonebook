import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuthenticated } from 'redux/auth/selectors'
import { ButtonContainerStyled, NavLinkButton, SideBarStyled, StyledLink } from './pages/navBar.styled'
import { LogoutButtonStyled } from './pages/userMenu/userMenu.styled'
import { logoutThunk } from 'redux/auth/operations'
import { toast } from 'react-toastify'

export const NavBar = () => {
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const user = useSelector(state => state.auth.user)
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(logoutThunk(user))
			.unwrap()
			.then(() => {
				toast.success('Bye Bye')
			})
	}
	return (
		<SideBarStyled>
			<ButtonContainerStyled>
				<StyledLink to='/'>Contacts</StyledLink>
			</ButtonContainerStyled>
			{!isAuthenticated ? (
				<ButtonContainerStyled>
					<NavLinkButton to='/login'>Login</NavLinkButton>
					<span> | </span>
					<NavLinkButton to='/register'>Register</NavLinkButton>
				</ButtonContainerStyled>
			) : (
				<ButtonContainerStyled>
					<StyledLink to='/menu'>UserMenu</StyledLink>
					<span> | </span>
					<LogoutButtonStyled onClick={handleLogout}>Logout</LogoutButtonStyled>
				</ButtonContainerStyled>
			)}
		</SideBarStyled>
	)
}
