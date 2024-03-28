/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Despedida(props) {
const {despedida} = props;

  return (
    <div className='despedida'>
      <p><b>Información adicional:</b> {despedida}</p>
    </div>
  )
}

export default Despedida