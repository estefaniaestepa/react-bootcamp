import React, { useState } from 'react'



function Hook() {

    const [contador, setCount] = useState(0);

  return (

    <div>
        <div className='counter'>{contador}</div>
        <button className='btn' onClick={() => {
            setCount(contador -1);
        }}>Restar</button>
        <button className='btn' onClick={() => {
            setCount(contador +1);
        }}>Sumar</button>
    </div>

  )
}

export default Hook

// all componente de react tiene algo que no vemos en el código que es el estado. El estado es una serie de datos que se almacenan parar su uso durante la ejecucion.
// ejecucion -> espacio de tiempo durante el cual el programa esta funcionando. La ejecución no es estátic, a lo largo de esa ejecución hay variables que pueden cambiar.
// Por ejemplo el reloj, cada minuto cambia, entonces la variable que contiene la hora es modificada.
// JAVASCRIPT NO VUELVE ATRAS, por lo tanto React lo guarda en una cajita. Accedemos a esos datos a través de un HOOK. 


// USAREMOS HOOKS PARA MANEJAR CUALQUIER DATO QUE SEA SUSCEPTIBLE DE CAMBIAR, CREARSE O ELIMINARSE.

/* FORMA DE UN  HOOK
nombramos myHook y le decimos que datos está guardando y la función pada modificar los datos.
usamos la funcion useState para acceder a esos datos
const myHook [dato, setDato] = useState(valor_inicial_de_dato);
*/