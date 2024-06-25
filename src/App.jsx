import './App.css'
import Header from './componentes/Header'
import Contenedor from './componentes/Contenedor'
import Completadas from './componentes/Completadas'
import Tareas from './componentes/Tareas'
import { useRef,useState } from 'react'

function App() {
  const inputRef = useRef();{/*Este input ref me ayudara para obtener el valor del input*/}

  const [contador, setContador] = useState(0);{/*Este useState lo utilizare para crear el contador de tareas completadas*/}


  return (
    <>
      <div>
        <Header/>{/*Este header contien lo que es el titulo y lo que son las redes sociales con sus respectivos inputs*/} 
        <Completadas contador={contador} setContador={setContador}></Completadas>{/*Aqui completadas es la parte que muestra el contador de tareas que completamos al marcar el checkbox  */}
        <Contenedor ref1={inputRef}></Contenedor>{/*Este contenedor tiene el input y el boton que usaremos para guardar las tareas en el fetch*/}
        <Tareas/> {/*En tareas es donde se mostraran las respectivas tareas que guardamos en el fetch*/}
      </div>
    </>
  )
}

export default App
