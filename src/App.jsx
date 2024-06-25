import './App.css'
import Header from './componentes/Header'
import Contenedor from './componentes/Contenedor'
import Completadas from './componentes/Completadas'
import Tareas from './componentes/Tareas'
import { useRef,useState } from 'react'

function App() {
  const inputRef = useRef()
  const [contador, setContador] = useState(0);


  return (
    <>
      <div>
        <Header></Header>
        <Completadas contador={contador} setContador={setContador}></Completadas>
        <Contenedor ref1={inputRef}></Contenedor>
        <Tareas></Tareas>
      </div>
    </>
  )
}

export default App
