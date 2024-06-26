import './App.css'
import Header from './componentes/Header'
import Contenedor from './componentes/Contenedor'

import Tareas from './componentes/Tareas'
import { useRef } from 'react'

function App() {
  const inputRef = useRef();{/*Este input ref me ayudara para obtener el valor del input*/}




  return (
    <>
      <div>
        <Header/>{/*Este header contien lo que es el titulo y lo que son las redes sociales con sus respectivos inputs*/} 
        <Contenedor ref1={inputRef}></Contenedor>{/*Este contenedor tiene el input y el boton que usaremos para guardar las tareas en el fetch*/}
        <Tareas /> {/*En tareas es donde se mostraran las respectivas tareas que guardamos en el fetch*/}
      </div>
    </>
  )
}

export default App
