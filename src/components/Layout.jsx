import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from './NavBar'
import { styled } from 'styled-components'

export const Layout = () => {
	return (
		<main>
			<NavBar />
			<div>
				<Outlet />
			</div>
			<Footer>Here it could be your advertisement!</Footer>
		</main>
	)
}

const Footer = styled.footer`
	background-color: #5175d0;
	box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.5);
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 20px 60px;
	font-size: 20px;
	text-decoration: none;
	color: #ffffff;
	font-weight: bold;
`
