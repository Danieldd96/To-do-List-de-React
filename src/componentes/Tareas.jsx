import React, { useState, useEffect } from 'react';
import Get from './Get';
import deleteData from './Delete';
import actualizarTarea from './Put';

const Tareas = () => {
    const [lista, setLista] = useState([]);
    useEffect(() => {
        const ListarTareas = async () => {
            const Lista = await Get();
            setLista(Lista);
        };
        ListarTareas();
    }, [lista]);

    const handleCheckboxClick = async (task) => {
        await actualizarTarea(task);
        
    };

    const handleDeleteClick = async (id) => {
        await deleteData(id);
    };

    return (
        <div className="tasks">
            
            {lista.length === 0 ? <div className='noTasks'><img className='imgChibi' src="src/img/firefly.gif"/><h2>No hay tareas ingresa una con el input de arriba</h2></div>: undefined}
            {lista.map((task) => (
                <ul className="task" key={task.id}>
                    <li>
                        <p className='pTask'><input type="checkbox" className='inCheck' defaultChecked={task.estado} onClick={() => handleCheckboxClick(task)}/>{task.tarea}</p>
                    </li>
                    <button className='btnDelete' onClick={() => handleDeleteClick(task.id)}>Borrar</button>
                </ul>
            ))}
        </div>
    );
};

export default Tareas;