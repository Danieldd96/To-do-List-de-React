import { useState } from "react"
import darDatos from "./Post"
const Contenedor=({ref1})=>{                         {/*Aqui la funcion esta recibiendo la propieda ref1 que seria el useRef usado para el input anteriormente*/}
    const [tarea,setTarea] = useState("");           {/*Con este useState se usara guardar las tareas escritas en el input*/}
    const Guardar = async()=>{                  {/*Con esta funcion guardamos la tarea puesta en el useState tarea*/}
        if (!tarea) {                           {/*Este if Revisara la tarea si esta vacia lanzara un alert si esta vacia y si no guarda la tarea en el fetch post*/}
            alert("Inserte texto por favor")   
          }else{
            console.log("Entra");
            await darDatos(tarea)
            
          }
        }
    return(
        <div>
            <form  className="Ingresar">   
			<input type="text" ref={ref1} placeholder="Ingresar Tarea" id="ingreso" onChange={(e)=>setTarea(e.target.value)} /> 
            {/*El input recibe la referencia y con el onchange tomamos el contenido de esta etiqueta input y obtenemos su contenido el cual mandaremos al metodo post*/}
			<button type="submit" onClick={Guardar} id="btn">Agregar</button> 
            {/*Y con este boton hacemos que el onclick active la funcion que guardara las tareas obtenidas con el input y las cuales son mandadas al fetch*/}
		</form>
        </div>
    )
}
export default Contenedor