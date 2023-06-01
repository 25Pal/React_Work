
import { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Component/Input";
import ToDOList from "./Component/ToDOList";
function App() {

  const [list, setList] = useState([])

  const addTask = (inputList) => {
    if(inputList!== "")
    setList([...list, inputList]);
  }

  const deleteItem = (key)=>{
    let newList = [...list];
    newList.splice(key ,1);
    setList([...newList]);
  }
  return (
    <Container >
      <Input addTask={addTask} />
      <h1>TO-DO</h1>
      <hr />
      {
        list.map((ele, i) => {
          return (
              <ToDOList key={i} index={i} ele={ele} deleteItem={deleteItem}/>
           
          )

        })
      }

    </Container>
  );
}

export default App;

const Container = styled.div`
  hr{
    width: 30rem;
    
  }
  h1{
    margin-left:28rem;
    margin-top:0rem;
    margin-bottom:0rem;
  }

`