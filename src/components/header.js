import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
	display: flex;
	width: 100%;
	border: 1px solid black;
`
const HeaderH1 = styled.h1`
	margin: 0 auto;
	margin-top: 5%;
`

const HeaderH2 = styled.h2`

`

const HeaderImg = styled.img`
	position: fixed;
	top: 0;
`

export default function Header() {
    return (
		<HeaderDiv>
		<HeaderImg src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"/>
		<HeaderH1>Nasa Photos</HeaderH1>
		</HeaderDiv>

    )
};