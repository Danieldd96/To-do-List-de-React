import React, { useEffect } from 'react';
import Get from './Get';

function Completadas({contador,setContador}) {   {/*En esta funcion recibo los parametros contador y setContador */}

    useEffect(() => {                      {/*Con el useEffect Hacemos que se active la funcion al menos una vez*/}
        const change = async () => {      

            const lista = await Get();     {/*Este const lo usare para obtener con el metodo get las tareas*/}
            let conteo = 0;                {/*Este let conteo sera el que recibira el numero final que mostrare en el contador*/}
            lista.forEach(element => {     {/*Este forEach recorre las tareas*/}
            if (element.estado) {          {/*En este parte hago que vea los estados y que conteo aumente su valor*/}
                conteo++;
                }
            });
            setContador(conteo);{/*Con este setContador que recibimos de la funcion como parametro hacemos que el parametro contador contenga ahora el numero de conteo*/}
            
        };

        change();  {/*Con esto llamamos la funcion*/}
        
    }, []); 
    return (
        <div className="completadas">
            <p className="tarCom">Tareas completadas</p>
            <p id="contador">{contador}</p>    {/*En esta etiqueta <p> su contenido sera contador que ya tendria el numero nuevo que se mostrara en pantalla*/}
        </div>
    );
}

export default Completadas;