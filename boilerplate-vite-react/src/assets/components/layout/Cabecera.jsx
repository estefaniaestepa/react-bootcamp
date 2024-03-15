/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Portrait from "../common/Portrait";

function Cabecera(props) {
  const datos = props.datos;


  return (
    <div className="cabecera">
    <h1>Curriculum Vitae</h1>
    <Portrait img={datos.img} />
    <h2>{datos.nombre}</h2>
    <p><b>Fecha de nacimiento:</b>{datos.nacimiento}</p>
    <p><b>Lugar:</b>{datos.lugar}</p>
    <p><b>Email:</b>{datos.email}</p>
  </div>
  
  )
}
export default Cabecera;
