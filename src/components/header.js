import React from 'react'
import styled from 'styled-components'

export default function Header() {
	const HeaderDiv = styled.div`
	display: flex;
	width: 100%;
	`
	const HeaderH1 = styled.h1`
	margin: 0 auto;
	margin-top: 5%;
	color: white;
	`
	const HeaderImg = styled.img`
	position: fixed;
	top: 0;
	`
	return (
		<HeaderDiv>
			<HeaderImg src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" />
			<HeaderH1>Nasa Photos</HeaderH1>
		</HeaderDiv>

	)
};