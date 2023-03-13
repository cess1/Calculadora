import { useState } from 'react'
import './App.css'
import logo from './img/imagen_ia_12.png'

function App() {

  return (
    <div className="App">
      <div className='logo-contenedor'>
      <img 
        src={logo}
        className ='logo'
        alt='Logo'
      />
      </div>
      <div className='contenedor-calculadora'>
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>
      <div className="fila"></div>
      </div>
    </div>
  )
}

export default App
