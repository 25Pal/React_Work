import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Quotes from './Quotes';
// let url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/'
function Home() {
  
    return (
        <Container >

            <h1 >
                Welcome,Please click on the button to get Random <span>"QUOTES"</span>
            </h1><br />
           
            <button className='btn'>
            
              <Link to="/Quotes" >GET QUOTE </Link>
                
            </button>
          
        </Container>
    )
}

export default Home

const Container = styled.div`
  
      /* border: 1px solid red; */
      margin: 10rem;
      box-sizing: border-box;

      h1{
        font-size: 3rem;
        font-family: Georgia, 'Times New Roman', Times, serif;
      }
      span{
        color: blueviolet;
      }
    .btn{
      background-color: #ffff;
      border: none;
      height: 6rem;
      width: auto;
      font-size: 5rem;
      color: whitesmoke;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-weight:bold;
       box-shadow: 0px 4px 15px blueviolet;
       cursor: pointer;
       
    }


    
`