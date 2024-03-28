import React from 'react'
import Articulo from './Articulo'

function Articulos() {

  const data = {
    label: "exclusive",
    title: "Realtors Reach Deal That Will Change How Americans Buy and Sell Homes",
    desc: "The groundbreaking $418 million legal agreement could drive down commission rates and shrink the number of real-estate agents over time.",
    readingTime: "7 min read",
  }
  return (
    <Articulo data={data}/>
  )
}

export default Articulos
