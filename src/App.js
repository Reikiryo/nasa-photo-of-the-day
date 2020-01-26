import React, { useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/header'

const Data = {
  image: "https://apod.nasa.gov/apod/image/1203/angrysun_friedman_960.jpg",
  title: "Angry Sun Erupting",
  explanation: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  date: "2012-03-14",
  copy: "Alan FriedmanAverted Imagination"
}

const Container = styled.div`
width: 100%;
height: 100vh;
postion: absolute;
background-image: url("https://thenypost.files.wordpress.com/2019/11/astronaut-87.jpg?quality=80&strip=all");
background-repeat: no-repeat;
background-size: contain;
background-size: auto;
background-position: center;
background-attachment: fixed;
`
const Description = styled.div`
width: 100%;
height: 100vh;
background-color: 
`
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
const ImgTitle = styled.h3`
  text-align: center;
  color: black;
  font-size: 2rem;
  margin: 2% auto;
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

function App() {
  const [data, setData] = useState([])
  const [text1, setText1] = useState('2012')
  const [text2, setText2] = useState('03')
  const [text3, setText3] = useState('14')

  const date = `${text1}-${text2}-${text3}`
  const api = 'https://api.nasa.gov/planetary/apod?api_key=Fnat6NGYaQR1xNu6JUJYNWenhXMF3mmiBjvxyier&date=' + date

  const callApi = () => {
    axios.get(api)
    .then(res => {
      console.log(res)
      setData(res.data)
    })
    .catch(err => {
      console.log("ERROR",err)
    })
  } 

  useEffect(() => {
    callApi()
  }, [])
  
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
    <div className="App">
    <Container>
    <Header/>
    <MainDiv>
        <DateH2>Find Photos By Date</DateH2>
            <DateTextDiv>
            <DateText onChange={e => textCallback(e)} id="text1" key="1" rows="1" cols="4">2012</DateText>
            <DateText onChange={e => textCallback(e)} id="text2" key="2" rows="1" cols="2">03</DateText>
            <DateText onChange={e => textCallback(e)} id="text3" key="3" rows="1" cols="2">14</DateText>
            <DateButton onClick={() => callApi()}>Go!</DateButton>
            </DateTextDiv>
            <ImageDiv>
                <ImgTitle>{data.title}</ImgTitle>
                <DateImg src={data.url}/>
            </ImageDiv>
            <MoreInfo><a>Find Out More</a></MoreInfo>
        </MainDiv>
    </Container>
    <Description/>
    </div>
  );
}

export default App;
