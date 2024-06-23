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
    }, []);

    const handleCheckboxClick = async (task) => {
        await actualizarTarea(task);
    };

    const handleDeleteClick = async (id) => {
        await deleteData(id);
    };

    return (
        <div className="tasks">
            {lista.map((task) => (
                <ul className="task" key={task.id}>
                    <li>
                        <p><input type="checkbox" defaultChecked={task.estado} onClick={() => handleCheckboxClick(task)}/>{task.tarea}</p>
                    </li>
                    <button onClick={() => handleDeleteClick(task.id)}>Borrar</button>
                </ul>
            ))}
        </div>
    );
};

export default Tareas;