import React from 'react'
import axios from 'axios'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components";
function Location({location ,humid}) {
    
  return (
    <Container>
        <LocationOnIcon className='Icon' style={{ fontSize: '3rem' }}/>   
        <h1>
            {location === "" ? "Location" : location }
            <h6>
            {humid === "" ? "Humidity" : humid }
            </h6>
           
        </h1>
        
       
    </Container>
    
  )
}

export default Location

const Container = styled.div`
    
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .Icon{
        color:skyblue;
    }

    h1{
        color: whitesmoke;
        text-shadow:1px 1px 1px skyblue;
        padding-right:2rem;
        h6{
            text-align:end;
            color: white; 
            text-shadow:1px 1px 1px skyblue;
        }
    }
`