import React, { useState } from 'react'


function Colores() {

    const [color1, setColor1] = useState("red"); // creamos un estado para cada cuadrado y le asignamos el color inicial
    const [color2, setColor2] = useState("red");
    const [color3, setColor3] = useState("red");

    const changeColor1 = () => {
        setColor1(prevColor => prevColor === "red" ? "#008000" : "red");
    };

    const changeColor2 = () => {
        setColor2(prevColor => prevColor === "red" ? "#008000" : "red");
    };

    const changeColor3 = () => {
        setColor3(prevColor => prevColor === "red" ? "#008000" : "red");
    };

     /*
    Pantalla con 3 cuadrados
    Cuando se haga click en un cuadrado, este cambiará de color
    
usuario hace click en cuadrado --> cuadrado cambia de color --> esto se hace a través de la clase.

    INTERRUPTOR EN PROGRAMACIÓN, si algo es true lo convierte en false, y si algo es false lo convierte en true. (!variable)
  */

    return (
        <>
            {/*Cada cuadrado tiene su propio evento onClick que llama a su función de cambio de color */}
            <div className='cuadrado1' style={{ backgroundColor: color1 }} onClick={() => {changeColor1()}}></div>
            <div className='cuadrado2' style={{ backgroundColor: color2 }} onClick={() => {changeColor2()}}></div>
            <div className='cuadrado3' style={{ backgroundColor: color3 }} onClick={() => {changeColor3()}}></div>
        </>
    );
}

export default Colores