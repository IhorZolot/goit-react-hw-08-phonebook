import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NotFound = () => {
	return (
		<NotFoundStyled>
			<h1>Page not found..</h1>
			<NotFoundLinkStyled to='/'>Go to Login</NotFoundLinkStyled>
		</NotFoundStyled>
	)
}

const NotFoundStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const NotFoundLinkStyled = styled(Link)`
	margin-bottom: 20px;
	text-decoration: none;
	color: #460e57;
	border-radius: 4px;
	border: 2px solid #ccc;
	padding: 5px 20px;

	&:hover {
		text-decoration: underline;
	}
`
