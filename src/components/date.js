import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const MainDiv = styled.div`
    maxwidth: 800px;
    margin: 0 auto;
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

export default function DropDown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <MainDiv>
        <DateH2>Find Photos By Date</DateH2>
            <ImageDiv>
                <DateImg src={props.image} />
            </ImageDiv>
            <MoreInfo><a>Find Out More</a></MoreInfo>
        </MainDiv>
    )
};