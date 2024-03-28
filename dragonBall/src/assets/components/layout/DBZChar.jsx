import React from "react";

function DBZChar(props) {
  // 1. saco los datos de props a una variable más cómoda
  const data = props.data;

  // 2. escribo los datos en el elemento donde quiero que se pinten.
  return (
    <div className="container">
      <div className="img-container">
        <img className="char-img" src={data.image} />
      </div>
 {/*      <div className="desc-container">
        <p>{data.description}</p>
        </div> */}
        <div className="name-container">
          <h2>{data.name}</h2>
        </div>
        <div className="prop-container">
          <div className="prop">
            <p>KI: <br></br><span>{data.ki}</span></p>
          </div>
          <div className="prop">
            <p>ESPECIE: <br></br><span>{data.race}</span></p>
          </div>
          <div className="prop">
            <p>FACCIÓN: <br></br><span>{data.affiliation}</span></p>
          </div>
        </div>
    
    </div>
  );
}

export default DBZChar;