import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Offer from './Offer'

const index = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/offer' element={<Offer/>} />
    </Routes>
  )
}

export default index
