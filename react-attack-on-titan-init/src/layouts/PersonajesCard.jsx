/* eslint-disable react/prop-types */
const PersonajesCard = (listaPerfiles) => {
  // eslint-disable-next-line react/prop-types
  /* const data= props.data; */
  // convertir props a data
  console.log(listaPerfiles);
return (
  <>
      <tr className="char-table-row">
          <td>{listaPerfiles.name}</td>
          <td>{listaPerfiles.faction}</td>
          <td>{listaPerfiles.profession}</td>
          <td>{listaPerfiles.race}</td>
      </tr>
  </>
)
}

export default PersonajesCard