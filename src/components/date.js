import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Description from './description'

const MainDiv = styled.div`
    height: 80%;
    maxwidth: 1000px;
    margin: 0 auto;
`
const ImageDiv = styled.div`
    margin: 2% auto;
    padding: 2%;
    background: white;
    width: 30.3%;
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
    display: flex;
    align-items: center;
    justify-content: center;
`
const DateText = styled.textarea`
    resize: none;
`
const DateButton = styled.button`
    width: 20%:
    background-color: white;
`

export default function DropDown(props) {
    const [text1, setText1] = useState('2012')
    const [text2, setText2] = useState('03')
    const [text3, setText3] = useState('14')

    const date = `${text1}-${text2}-${text3}`
    const api = 'https://api.nasa.gov/planetary/apod?api_key=Fnat6NGYaQR1xNu6JUJYNWenhXMF3mmiBjvxyier&date=' + date

    console.log(api)
    const callapi = (api) => {
        axios.get(api)
        .then(res => {
        console.log(res) 
        })
        .catch(err => {

        })
    } 
    
    const textCallback = (e) => {
        const value = e.target.value
        const id = e.target.id
        console.log(value)
        if (id === 'text1') {
            setText1(value)
        } else if (id === 'text2') {
            setText2(value)
        } else if (id === 'text3') {
            setText3(value)
        }
    }

    return (
        <MainDiv>
        <DateH2>Find Photos By Date</DateH2>
            <DateTextDiv>
            <DateText onChange={e => textCallback(e)} id="text1" key="1" rows="1" cols="4">2012</DateText>
            <DateText onChange={e => textCallback(e)} id="text2" key="2" rows="1" cols="2">03</DateText>
            <DateText onChange={e => textCallback(e)} id="text3" key="3" rows="1" cols="2">14</DateText>
            <DateButton onClick={() => console.log('working')}>Go!</DateButton>
            </DateTextDiv>
            <ImageDiv>
                <DateImg src={props.image} />
            </ImageDiv>
            <MoreInfo><a>Find Out More</a></MoreInfo>
        </MainDiv>
    )
    
};