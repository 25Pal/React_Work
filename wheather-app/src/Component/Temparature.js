import React from 'react'
import styled from "styled-components";
import CloudQueueSharpIcon from '@mui/icons-material/CloudQueueSharp';
function Temparature({temp}) {
    const temprature= temp.toFixed(0);

  return (
    <Container>
        <CloudContainer>
        <CloudQueueSharpIcon className='Icon' style={{ fontSize: '4rem', color: 'white' }}/>
      </CloudContainer>
       <h1>
            {temprature}°C 
        </h1>
        
    </Container>
  )
}

export default Temparature


const Container = styled.div`
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h1{
        margin-right:2rem;
        color: aliceblue;
        text-shadow:5px 0px 5px black;
    }
    

`;

const CloudContainer = styled.div`
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;
