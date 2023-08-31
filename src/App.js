import React from 'react'
import Nav from './components/nav/nav'
import { BrowserRouter } from 'react-router-dom'
import Route from './components/nav/routes/rout'
import Rout from './components/nav/routes/rout'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
     <Rout/>
     <Footer/>
    </BrowserRouter>
  )
}

export default App