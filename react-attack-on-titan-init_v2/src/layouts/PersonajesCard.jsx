const PersonajesCard = (props) => {
  // console.log(props);
  const data = props.data;
  //   console.log(data);

  return (
    <>
      <tr className="char-table-row">
        <td>{data.name}</td>
        <td>{data.faction}</td>
        <td>{data.profession}</td>
        <td>{data.race}</td>
      </tr>
    </>
  );
};

export default PersonajesCard;
