import React, { useEffect, useState } from 'react';
import styled from "styled-components"

function Input({addTask}) {
    const [inputValue , setInputValue] = useState("")

  return (
    <Container>
        <input 
        type='text' 
        placeholder='Add Task' 
        onChange={(e)=>{setInputValue(e.target.value)}}
        value={inputValue}
        >
        </input>
        <button onClick={()=>
        {
            addTask(inputValue) 
            setInputValue("")
        }} >Add</button>
    </Container>
  )
}

export default Input

const Container = styled.div`
/* border: 1px solid blue; */
display: flex;
align-items: center;
justify-content: center;
padding-top:4rem;

input{
   background-color: azure;
   border: gray 2px solid;

   height: 2.5rem;
   width: 25rem;
   margin-right: 1rem;
   font-size: 1rem;
   font-family: Verdana, Geneva, Tahoma, sans-serif;
   font-weight: 800;
   border-radius:10px ;
   color: blue;

}

Button{
    height: 3rem;
    width: 3rem;
    border-radius:3rem;
    color: white;
    background-color: blue;
    border: none;
    cursor: pointer;
}

`