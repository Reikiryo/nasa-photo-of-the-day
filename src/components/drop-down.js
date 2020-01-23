import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const MainDiv = styled.div`
    maxwidth: 800px;
`
const DateImg = styled.img`
    width: 50%;
`

export default function DropDown(props) {
    return (
        <MainDiv>
            <DateImg src={props.image}/>
        </MainDiv>
    )
};