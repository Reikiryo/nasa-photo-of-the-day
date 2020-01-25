import React, { useState } from 'react';
import styled from 'styled-components';

const MainDiv = styled.div`
    height: 80%;
    maxwidth: 1000px;
    margin: 0 auto;
    border: 1px solid white;
`
const ImageDiv = styled.div`
    margin: 2% auto;
    padding: 2%;
    background: white;
    width: 30.3%;
    border: 2px solid white;
`
const DateImg = styled.img`
    width: 100%;
    text-align: center;
`
const DateH2 = styled.h2`
    text-align: center;
    margin: 2% auto;
    color: white;
`
const MoreInfo = styled.div`
    text-align: center;
    color: white;
    font-size: 1rem;
    bottom: 0;
`

const DateTextDiv = styled.div`
    text-align: center;
    width: 20%;
    margin: 0 auto;
`
const DateText = styled.textarea`
    resize: none;
`
// const text1Value = document.getElementById('text1').value
// const text2Value = document.getElementById('text2').value
// const text3Value = document.getElementById('text3').value

const textCallback = (e) => {
    const value = e.target.value
    console.log(value)
    
}

export default function DropDown(props) {
    const [text1, setText1] = useState('2012')
    const [text2, setText2] = useState('03')
    const [text3, setText3] = useState('14')

    return (
        <MainDiv>
        <DateH2>Find Photos By Date</DateH2>
            <DateTextDiv>
            <DateText onChange={e => textCallback(e)} id="text1" key="1" rows="1" cols="4">2012</DateText>
            <DateText onChange={e => textCallback(e)} id="text2" key="2" rows="1" cols="2">03</DateText>
            <DateText onChange={e => textCallback(e)} id="text3" key="3" rows="1" cols="2">14</DateText>
            </DateTextDiv>
            <ImageDiv>
                <DateImg src={props.image} />
            </ImageDiv>
            <MoreInfo><a>Find Out More</a></MoreInfo>
        </MainDiv>
    )
    
};