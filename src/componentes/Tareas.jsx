import React, { useState, useEffect } from 'react';
import Get from './Get';
import deleteData from './Delete';
import actualizarTarea from './Put';

const Tareas = () => {         
    const [contador,setContador]=useState(0);                    {/*Con esta funcion Tareas se obtendran las tareas guardadas previamente para mostrarlas luego en pantalla*/}
    const [lista, setLista] = useState([]);         {/*Este use state sera para que lista contenga las tareas en un array*/}
    useEffect(() => {
        const ListarTareas = async () => {          {/*ListarTareas hara que lista tenga las tareas obteniendolas del metodo get*/}
            const Lista = await Get();
            setLista(Lista);                        {/*Y con el setLista le pondremos el estado de la Lista previamente mencionada*/}
        };
        const tareasHechas = lista.filter(tarea=>tarea.estado===true).length
        setContador(tareasHechas)
        ListarTareas();                              
    }, [lista]);                                    {/*Con el useEffect haremos que la funcion se ejecute al menos una vez o cuando la lista cambie*/}

    const handleCheckboxClick = async (task) => {   {/*Con esta funcion cambio el estado de las tareas*/}
        await actualizarTarea(task);
        const change = async () => {      
            let conteo = 0;                {/*Este let conteo sera el que recibira el numero final que mostrare en el contador*/}
            setContador(conteo);{/*Con este setContador que recibimos de la funcion como parametro hacemos que el parametro contador contenga ahora el numero de conteo*/}
            
        };

        change();  {/*Con esto llamamos la funcion*/}

    };

    const handleDeleteClick = async (id) => {      {/*con esta funcion elimino la tarea*/}
        await deleteData(id);
    };

    return (
        <div className="tasks">
            {lista.length===0?undefined:<div className="completadas">
                <p className="tarCom">Tareas completadas</p>
                <p id="contador">{contador}</p>    {/*En esta etiqueta <p> su contenido sera contador que ya tendria el numero nuevo que se mostrara en pantalla*/}
            </div>}
            {/*Con esta parte creo el mensaje de no hay tareas viendo si lista.lenght es igual a o cree el mensaje y si detecta que hay tareas no muestre ningun mensaje*/}
            {lista.length === 0 ? <div className='noTasks'><img className='imgChibi' src="src/img/firefly.gif"/><h2>No hay tareas ingresa una con el input de arriba</h2></div>: undefined}
            {/*Esta parte sera el como se mostrara en pantalla cada una de las tareas aqui lista la usaremos con un map y 
            task sera cada una de ellas con el key{task.id} se referira aque cada tarea sera creada dentro de ella el cual tendra las etiquetas <li> <p> <input?
            y un boton*/}
            {lista.map((task) => (
                <ul className="task" key={task.id}>
                    <li>
                        <p className='pTask'><input type="checkbox" className='inCheck' defaultChecked={task.estado} onClick={() => handleCheckboxClick(task)}/>{task.tarea}</p>
                        {/*El input de tipo checkbox el cual para mantener su check de manera que cuando el estado cambie no se desmarque se le agregara un 
                        defaultChecked que tendra el estado de la tarea si es en su caso false o true*/}
                        {/*En cuanto a la funcion onclick del checkbox mandara la tarea a la funcion para cambiar su estado*/}
                        {/*En cuanto a el texto de la tarea se mostrara dentro de la etiqueta <p> que seria task.tarea que tendria la tarea en especifico*/}
                    </li>
                    {/* Con este boton eliminaremos la tarea llamando a la funcion handleDeleteClick que en sus parametros recibira el id de la tarea a borrar*/}
                    <button className='btnDelete' onClick={() => handleDeleteClick(task.id)}>Borrar</button>
                </ul>
            ))}
        </div>
    );
};

export default Tareas;