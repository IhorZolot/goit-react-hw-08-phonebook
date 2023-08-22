import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SideBarStyled = styled.nav`
	background-color: #5175d0;
	box-shadow: 0px 2px 4px rgba(0, 0, 0.1, 0.5);
	display: flex;
	gap: 25px;
	top: 0;
	left: 0;
	width: 100%;
	padding: 20px;
	justify-content: space-between;
	margin-bottom: 100px;
`

export const ButtonContainerStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-right: 60px;
`

export const NavLinkButton = styled(NavLink)`
	text-decoration: none;
	padding: 5px 10px;
	border: 1px solid #160909;
	border-radius: 5px;
	color: #160909;
	font-weight: bold;
	&:hover {
		background-color: #160909;
		color: #ffffff;
	}
`

export const StyledLink = styled(NavLink)`
	margin-left: 40px;
	font-size: 20px;
	text-decoration: none;
	color: #ffffff;
	font-weight: bold;
	&:hover {
		color: #160909;
	}
`
