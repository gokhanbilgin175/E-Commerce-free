import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Product from '../product/product'
import About from '../about/about'
import Contact from '../contact/contact'
import Home from '../home/home'
import Card from '../card/card'

const Rout = ({product,setProduct,detail,view,close,setClose,card,setCard,addToCard}) => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home detail={detail}  view={view} close={close} setClose={setClose}/>}/>
        <Route path="product" element={<Product addToCard={addToCard} product={product} view={view}  setProduct={setProduct} detail={detail} close={close} setClose={setClose} />}/>
        <Route path="about" element={<About/>}/>
        <Route path="card" element={<Card  card={card} setCard={setCard} />}/>
        <Route path="contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default Rout