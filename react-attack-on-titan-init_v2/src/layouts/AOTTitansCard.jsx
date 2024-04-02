import React from "react";

function AOTTitansCard({ titan }) {
  //   const data = props.data;
  return (
    // <div className="aot-titans">
    //   <h4>{data.name}</h4>
    //   <img src={data.img} />
    //   <p>Age: {data.height}</p>
    //   <p>Gender: {data.abilities}</p>
    //   <p>Occupation: {data.allegiance}</p>
    // </div>
    <div className="titan-card">
      <h4>{titan.name}</h4>
      <img src={titan.img} alt={titan.name} />
      <p>Abilities: {titan.abilities}</p>
      <p>Height: {titan.height}</p>
      <p>Allegiance: {titan.allegiance}</p>
    </div>
  );
}

export default AOTTitansCard;
