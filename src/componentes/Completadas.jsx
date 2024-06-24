import React, { useEffect } from 'react';
import Get from './Get';

function Completadas({contador,setContador}) {

    useEffect(() => {
        const change = async () => {

            const lista = await Get(); 
            let conteo = 0;
            lista.forEach(element => {
            if (element.estado) {
                conteo++;
                }
            });
            setContador(conteo)
           
        };

        change();
        
    }, []); 
    return (
        <div className="completadas">
            <p className="tarCom">Tareas completadas</p>
            <p id="contador">{contador}</p> 
        </div>
    );
}

export default Completadas;