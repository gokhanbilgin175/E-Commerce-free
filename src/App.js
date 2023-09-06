import React, { useState } from 'react'
import Nav from './components/nav/nav'
import { BrowserRouter } from 'react-router-dom'
import Route from './components/routes/rout'
import Rout from './components/routes/rout'
import Footer from './components/footer/footer'
import ProductDetail from "./components/product/productdetail"

const App = () => {
  const [product, setProduct] = useState(ProductDetail)
  const [detail, setDetail] = useState([])
  const [close, setClose] = useState(true)
  const [card, setCard] = useState([])

  const searchBtn = (val) => { 
    if(val=== ""){
      setProduct(ProductDetail)
    }else{
      const searchButton = ProductDetail.filter((x)=>
    
      x.Cat.toLocaleLowerCase() === val.toLocaleLowerCase()
      )
      setProduct(searchButton)
    }
    
   }

   const view = (val) => { 
    setDetail([{...val}])
    setClose(true)
    }

    const addToCard = (val) => { 

      const exsit = card.find((x)=>
      x.id === val.id
     
      )
     
      if(exsit){
        alert("This Product is already added to card")
      }
      else{
        alert("Product is added to cart")
        setCard([...card, {...val, qty:1}])
     
      }



     }

  return (
    <BrowserRouter>
      <Nav searchBtn={searchBtn}/>
     <Rout addToCard={addToCard} detail={detail} card={card} setCard={setCard} view={view} product={product} setProduct={setProduct} close={close} setClose={setClose}/>
     <Footer/>
    </BrowserRouter>
  )
}

export default App