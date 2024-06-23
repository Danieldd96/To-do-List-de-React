import './App.css'
import Header from './componentes/Header'
import Contenedor from './componentes/Contenedor'
import Completadas from './componentes/Completadas'
import Tareas from './componentes/Tareas'
import { useRef } from 'react'

function App() {
  const inputRef = useRef()


  return (
    <>
      <div>
        <Header></Header>
        <Completadas></Completadas>
        <Contenedor ref1={inputRef}></Contenedor>
        <Tareas></Tareas>
      </div>
    </>
  )
}

export default App
