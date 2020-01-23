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
const DropDownDiv = styled.div`
    margin: 0 auto;
    width: 18%;
`
const DropDownH2 = styled.h2`
    text-align: center;
    margin: 2% auto;
    color: white;
`
const MoreInfo = styled.div`
    text-align: center;
    color: white;
    font-size: 1rem;
`

export default function DropDown(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <MainDiv>
        <DropDownH2>Find Photos By Date</DropDownH2>
            <DropDownDiv>
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        Dropdown's menu is right-aligned
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </DropDownDiv>
            <ImageDiv>
                <DateImg src={props.image} />
            </ImageDiv>
            <MoreInfo><a>Find Out More</a></MoreInfo>
        </MainDiv>
    )
};