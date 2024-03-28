/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

/* const data = {
  label: "exclusive",
  title: "Realtors Reach Deal That Will Change How Americans Buy and Sell Homes",
  desc: "The groundbreaking $418 million legal agreement could drive down commission rates and shrink the number of real-estate agents over time.",
  createdAt: "",
  readingTime: "7 min read",
} */

function Articulo(props) {
  const data = props.data;
  return (
    <div className='articulo'>
    <div className='label'> {data.label}</div>
    <div className='img-container'>
      <img src={data.img}/>
    </div>
      <h1 className='title'>{data.title}</h1>
      <p className='desc'>{data.desc}</p>
      <p className='reading'>{data.readingTime}</p>
    </div>
  )
}

export default Articulo
