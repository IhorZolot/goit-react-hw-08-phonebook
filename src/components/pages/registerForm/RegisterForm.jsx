import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerThunk } from 'redux/auth/operations'
import {
	ButtonStyled,
	FormContainerStyled,
	FormStyled,
	InputStyled,
	SignUpLinkStyled,
	TitleStyled,
} from './registerForm.styled'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		const credentials = { name, password, email }
		dispatch(registerThunk(credentials))
		setName('')
		setEmail('')
		setPassword('')
	}

	return (
		<FormContainerStyled>
			<TitleStyled>Register</TitleStyled>
			<FormStyled onSubmit={handleSubmit}>
				<InputStyled type='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
				<InputStyled type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
				<InputStyled
					type='password'
					placeholder='Password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
				<ButtonStyled type='submit'>Register</ButtonStyled>
				<SignUpLinkStyled>
					<span>Already have an account?</span>
					<Link to='/login'>Log in</Link>
				</SignUpLinkStyled>
			</FormStyled>
		</FormContainerStyled>
	)
}
