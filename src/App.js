import React, {useEffect} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import DropDown from './components/drop-down'
import Header from './components/header'

function App() {
  // useEffect(() => {
  //   axios.get('https://api.nasa.gov/planetary/apod?api_key=Fnat6NGYaQR1xNu6JUJYNWenhXMF3mmiBjvxyier&date=2012-03-14')
  //   .then(res => {
  //     console.log(res) 
  //   })
  // }, [])
  const data = {
    image: "https://apod.nasa.gov/apod/image/1203/angrysun_friedman_960.jpg",
    title: "Angry Sun Erupting",
    explanation: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    date: "2012-03-14",
    copy: "Alan FriedmanAverted Imagination"
  }
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
