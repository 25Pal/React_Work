import React from 'react'
import styled from "styled-components"; 

function ToDOList({ele,index,deleteItem}) {
  return (
    <Container>
        <li>
            {
                ele
            }
        <span className='icons' >
        <i class="fa-solid fa-trash-can icon-delete"
        onClick={(e)=>{deleteItem(index)}}></i>
        </span>

        </li>
        
    </Container>
  )
}

export default ToDOList

const Container = styled.div`
  
    margin-left:8rem;
    width: 24rem;
    height: 2rem;
    border-radius: 1rem;

    li{
        list-style-type: none;
        
  border:2px solid rgb(161, 158, 158);
  color:black;
  padding:3px;
  padding-left: 5px;
  border-radius: 5px; 
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left:20rem;
    }

    .icons{
  position: absolute;
  right: 10px;
}
.icons i{
  margin: 4px;
  font-size: large;
  cursor: pointer;
  transition: 0.1s;   
}
.icons i:hover{
  transform: scale(1.2);  
}

.icon-delete:hover{
  color: red;
}

`