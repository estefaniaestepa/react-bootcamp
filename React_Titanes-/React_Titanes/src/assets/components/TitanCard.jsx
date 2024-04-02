import React from "react";

function TitanCard({ titan }) {
  return (
    <div className="titan-card">
      <h4>{titan.name}</h4>
      <img src={titan.img} alt={titan.name} />
      <p>Abilities: {titan.abilities}</p>
      <p>Height: {titan.height}</p>
      <p>Allegiance: {titan.allegiance}</p>
    </div>
  );
}

export default TitanCard;
