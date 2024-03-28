/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Experiencia(props) {
  const { trabajos } = props;
  const listaTrabajos = [];

  for (let trabajo of trabajos) {
    listaTrabajos.push(
      <div key={trabajo.empresa} className="experiencia">
        <p><b>Empresa:</b> {trabajo.empresa}</p>
        <p><b>Cargo:</b> {trabajo.cargo}</p>
        <p><b>Años: </b>{trabajo.años}</p>
        <p><b>Experiencia:</b> {trabajo.experiencia}</p>
      </div>
    );
  }
  return <div>
  <h3>Experiencia</h3>
  {listaTrabajos}
  </div>;
}

export default Experiencia;
