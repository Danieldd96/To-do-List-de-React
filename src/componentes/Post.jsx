async function darDatos(tarea){
    try {
        let listaTareas={
            tarea:tarea,
            estado:false
        }
        const respuesta = await fetch("http://localhost:3000/api/task",{
           method: "POST",
           headers: {
            "Content-type": "application/json; charset=UTF-8"
          },
          body: JSON.stringify(listaTareas)
        })
        const datos = await respuesta.json()
        console.log(datos)
        console.log(`Se agregò un usuario ${listaTareas.tarea}`);
    } catch (error) {
        console.error(error);
    }
}
export default darDatos