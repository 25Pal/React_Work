import React, { useEffect, useState } from 'react'
import axios from "axios";
import styled from 'styled-components';

import { DotLoader } from 'react-spinners';
// import { useNavigate } from 'react-router-dom'
function Quotes() {

    const [quote, setQuote] = useState([]);
    const [loading, setLoading] = useState(false);
    const [initialLoading, setInitialLoading] = useState(true);

    // const redirect = useNavigate();
    let randomeQuotes = [];

    useEffect(() => {
        fetch();

    }, []);

    useEffect(() => {

        if (initialLoading) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false);
                setInitialLoading(false);
            }, 5000);
        }
    }, [initialLoading])

    async function fetch() {
        setLoading(true)
        let url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        let data = await axios.get(url);
        // console.log("axios data " , data.data.quotes)
        let obj = data.data.quotes;
        console.log("obj ", obj)
        randomeQuotes = [];
        while (randomeQuotes.length < 10) {
            const index = Math.floor(Math.random() * 10) + 1;
            if (!randomeQuotes.includes(obj[index])) {
                randomeQuotes.push(obj[index]);
            }

        }
        setQuote(randomeQuotes)
        setLoading(false);
    }

    const ReloadPage = () => {
        setLoading(true)

        setTimeout(() => {

            window.location.reload();

        }, 1000)
    }

    return (
        <Container>

            {initialLoading && (
                <div className="loader-container">
                    <DotLoader color={'#bc42f5'} loading={initialLoading} size={80} />
                </div>
            )}


            {
                !initialLoading && (
                <div className='btn'>
                    <button onClick={ReloadPage} disabled={loading}>
                        {loading ? 'Loading...' : 'Get Quotes'}
                    </button>
                    </div>
                )}

            {!initialLoading && !loading && 
            ( <div className='Container'>
            {
                quote.map((obj, index) => (
                    <div key={index} className='Block'>
                        <h3>{obj.quote}</h3>
                        <p>{obj.author}</p>

                    </div>
                ))}
        </div>)
            }
           
            

        </Container>
    )
}

export default Quotes

const Container = styled.div`
   padding:3rem;
   background-color: aliceblue;
   box-sizing: border-box;
   height: 100%;
   width: 100%;
   .loader-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    padding-top:10rem;
   }
   .btn{
   
    height: 3rem;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    
   }
   Button{
    background-color: blueviolet;
    height: 3rem;
    width: 20%;
    border-radius: 4rem;
    border: none;
    box-shadow:1px 1px 1px turquoise;
    color: white;
    font-size: 1rem;
    font-weight:bold;
   }
    .Container{
       
        display: grid;
        grid-template-columns: 25% 25% 25% ;
        gap: 5rem;
        padding:4rem;
        background-color: lineaer-gradient(to left , red , white);
    .Block{
        border: 1px solid blueviolet;
        box-shadow: 2px 2px 6px blueviolet;
        background-color: white;
        box-sizing: border-box;
        padding:1px;
        width: 100%;
        height: auto;
        transition: 0.5s ease-in-out;
        cursor: pointer;

        &:hover{
            background-color:blueviolet;
            color: white;
        }
        

        p{
            display: flex;
            justify-content: end;
            
        }
    }

    }
    @media screen and (min-width :795px)  and  (max-width:945px) {  //^^^ For phone will make it responsive as below ^^^\\
        display : inline-block;
        height: 80%;
        width: 80%;
        .Container{
            display: inline-block;
            border: 1px solid red;
            .Block{
            width: 80%;
            height: auto;
            
          }

        }
          
    }

    @media screen and (min-width :300px)  and  (max-width:794px) {  //^^^ For phone will make it responsive as below ^^^\\
        display : inline-block;
        height: 80%;
        width: 80%;
        .btn{
            height: 3rem;
            padding-bottom : 1rem;
            Button{
                height: 3rem;
                width: 100%;

            }
        }
        .Container{
            display: inline-block;
            
            padding: 0px;
            .Block{
            width: 100%;
            height: 100%;
            
          }

        }
          
    }
`