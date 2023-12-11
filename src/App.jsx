import { useState } from 'react'
import Home from './views/home/home'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import Navbar from './components/navbar/navbar'
import Cards from './components/cards/cards'
import Card from './components/card/card'
import './App.css'


function App() {

  return (
    <>
      <div>
        <Navbar/>
        <h1>Portafolio Nivel Dios Ultra Instinto Senior</h1>
        <Home/>
        <Contact/>
        <Projects/>
        <Cards/>
        <Card/>
        </div>
    </>
  )
}

export default App
