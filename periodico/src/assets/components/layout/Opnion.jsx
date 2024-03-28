import React from "react";

function Opnion(props) {
  const data = props.data;

  return (
    <div className="opinion">
     <h1 className="opinion-title">{data.title}</h1>
      <div className="container-img">
        <img src={data.img} />
      </div>
      <p className="opnion-autor">{data.opinion}</p>
    </div>
  );
}

export default Opnion;
