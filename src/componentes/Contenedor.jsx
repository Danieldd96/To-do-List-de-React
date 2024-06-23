import { useState } from "react"
import darDatos from "./Post"
const Contenedor=({ref1})=>{
    const [tarea,setTarea] = useState("")
    const Guardar = async()=>{
        
        if (!tarea) {
            alert("Inserte algo papu")
          }else{
            console.log("Entra");
            await darDatos(tarea)
            
          }
        }
    return(
        <div>
            <form  className="Ingresar">   
			<input type="text" ref={ref1} placeholder="Ingresar Tarea" id="ingreso" onChange={(e)=>setTarea(e.target.value)} /> 
			<button type="submit" onClick={Guardar} id="btn">Agregar</button> 
		</form>
        </div>
    )
}
export default Contenedor