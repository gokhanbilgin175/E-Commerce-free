import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Product from '../../product/product'
import About from '../../about/about'
import Contact from '../../contact/contact'
import Home from '../../home/home'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default Rout