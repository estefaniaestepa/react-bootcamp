import React from 'react'

function Card(props) {
    return (
        <div className='char-card'>
            <img src={props.image} />
            <p className='char-name'>{props.data.name}</p>
            <p className='char-year'>{props.data.birth_year}</p>
            <p className='char-gender'>{props.data.gender}</p>
            <p className='char-height'>{props.data.height}</p>
        </div>
    )
}

export default Card