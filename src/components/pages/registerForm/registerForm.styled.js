import styled from 'styled-components'

export const FormContainerStyled = styled.div`
	border: 1px solid #ccc;
	padding: 20px;
	border-radius: 5px;
	max-width: 400px;
	margin: 0 auto;
	background-color: white;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`

export const TitleStyled = styled.h2`
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 1rem;
	font-size: 24px;
`

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
`
export const InputStyled = styled.input`
	width: 95%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 3px;
	font-size: 16px;
	margin-bottom: 15px;
`

export const ButtonStyled = styled.button`
	background-color: #5175d0;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 3px;
	font-size: 16px;
	cursor: pointer;
`
export const SignUpLinkStyled = styled.div`
	display: flex;
	margin-top: 15px;
	align-items: center;
	text-align: center;
	margin: 0 auto;
	gap: 5px;
	margin-top: 15px;

	span {
		font-weight: bold;
	}
	a {
		color: #5175d0;
		font-weight: bold;
		text-decoration: none;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}
	}
`