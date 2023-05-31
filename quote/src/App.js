import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Quotes from './Quotes'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Quotes' element={<Quotes/>}/>
    </Routes>
    </BrowserRouter>
    </>

  )
}

export default App


