import Temparature from "./Component/Temparature";
import Location from "./Component/Location";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState(0);
  const [humid, setHumid] = useState("");


  // useEffect(()=>{

  // })
  const fetch = async (cityName) => {
    let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7d10f6442573d53de7fa1192d683e0b6`)
    let res = data.data;
    console.log(res);
    let tempInK = res.main.temp;
    let city = res.name;
    let Humid = res.main.humidity;
    let tempInC = tempInK - 273.15;
    setTemp(tempInC)
    setLocation(city)
    setHumid(Humid);
  }
  return (
    <Container >
      <MidContainer>
        <input
          type="text"
          placeholder="Type Loaction..."
          value={city}
          onChange={(e) => { setCity(e.target.value) }}
        />
        <button
          onClick={() => {
            fetch(city)
            setCity("")
          }

          }>
          °C
          {/* <SendIcon /> */}
        </button>
        <Location location={location} humid={humid} />
        <Temparature temp={temp} />

      </MidContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
background-position:center;
        background-image: url("https://img.freepik.com/free-vector/blue-sky-with-shiny-clouds-background_1017-23279.jpg?w=360");
        background-size:cover;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
        border:1px solid blue;

        
        
`;

const MidContainer = styled.div`
        /* border:3px solid red; */
        display:inline-block;
        padding-top:2rem;
        padding-left:2.7rem;
        height: 25rem;
        width: 30rem;
        box-sizing: border-box;
        background-color: rgba(128,128,128, 0.3);
        box-shadow: 0px 8px 20px skyblue;
        border-radius: 2rem;

        input{
          height: 3rem;
          width: 20rem;
          margin-right:1rem;
          border: skyblue 2px solid;
          border-radius:4rem;
          background-color: rgba(400,400,800, 0.5);
          padding-left: 1rem;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          font-weight:bold;
          font-style: oblique;
          color: whitesmoke;
          text-shadow:1px 1px 1px skyblue;
          
        }

        Button{
          height: 3rem;
          width: 3rem;
          border: orangered 2px solid;
          border-radius:4rem;
          font-size: medium;
          font-weight:bold;
          background-color:orange;
          box-shadow:0px 1px 15px red;
          cursor: pointer;
          transition: ease-in-out 0.6s;

          &:hover{
            background-color: yellow;
          }
          
        }
`;
