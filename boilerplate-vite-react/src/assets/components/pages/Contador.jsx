import React, { useState } from "react";

function Contador(props) {
  /*HOOK -> es una herramienta que nos permite guardar en state
  state se utiliza para almacenar las variables

  const[<variable>, <funcion que edita la variable>] = useState(<valor inicial de la variable>) --le damos a useState el valor inicial

  */
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h2>Contador</h2>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >++</button>
     <br />
      <br />
      <button onClick={() => {if (contador > 0) {
          setContador(contador - 1)}
        }}
      >
        --
      </button>
      <br />
      <br />
      <p className="contador">{contador}</p>
    </div>
  );
}

export default Contador;
