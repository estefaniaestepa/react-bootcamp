import React, { useState } from "react"
import "./Armario.css"

function Armario() {

  const prendas = [
  '/img/camiseta1.jpg',
  '/img/camiseta2.jpg',
  '/img/camiseta3.jpg',
  '/img/camiseta4.jpg',
  ]
  /* HOOK para guardar la posicion actual del array,
  y la funcion que cambia de foto */
/*   const [index, setIndex] = useState(0); */
  const [index, setIndex] = useState(0);

  return (
  <div className="armario">
  <div className="img-armario-container">
  <img className="img-armario" src={prendas[index]} />
  </div>
  
  <div className="boton-armario-container">
  <button className="boton-armario" onClick={()=> { 
    if(index > 0){
      setIndex(index -1)
    }else{
      setIndex(prendas.length -1)
    }
  }}>anterior </button>
  <button className="boton-armario" onClick={()=> { 
    if(index < prendas.length - 1){
    setIndex(index + 1)
    }else{
      setIndex(0)
    }
    console.log(index);
  }}>siguiente </button>
  </div>
  </div>
  )
  }
  export default Armario



