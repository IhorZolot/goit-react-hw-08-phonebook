import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const UserMenuContainerStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 16px;
`

export const UserInfoStyled = styled.p`
	font-weight: bold;
`

export const LogoutButtonStyled = styled.button`
	background-color: #ff006f;
	color: white;
	border: none;
	padding: 5px 10px;
	border-radius: 5px;
	cursor: pointer;
`
export const InlineParagraph = styled.p`
	display: inline;
	margin: 0;
	padding: 0;
	font-size: 16px;
	color: #333;
`
export const StyledLink = styled(Link)`
	color: #5175d0;
	text-decoration: underline;
	margin-top: 10px;
	display: block;
`
