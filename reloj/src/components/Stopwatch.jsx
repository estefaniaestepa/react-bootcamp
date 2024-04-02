import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // almacena el tiempo
  const [timerOn, setTimerOn] = useState(false); // indica si el cronómetro está activo o no

  useEffect(() => {
    let interval = null;

    if (timerOn) { // si el cronómetro está activo creamos un intervalo que se ejecuta cada 10 milisegundos para aumentar el tiempo.
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else { // si no está activo limpiamos el intervalo para detener el cronómetro
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  return (
    <div className="stopwatch">
      <h2>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> {/* muestra las horas. dividimos el tiemmpo total en 60000 milisegundos para obtener los minutos, math.floor para redondear hacía abajo y % 60 para obtener las horas. slice(-2) asegura que siempre se muestren dos dígitos */}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span> {/* muestra los minutos */}
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> {/* muestra los segundos */}
      </h2>
      <div id="buttons">
        {!timerOn && time === 0 && (  
          <button onClick={() => setTimerOn(true)}>Start</button>
        )} {/* verifica si el cronómetro NO está en funcionamiento y si el tiempo es igual a 0. si se cumplen, se muestra el botón start */}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>} {/* verifica si el cronómetro está en funcionamiento, si se cumple se muestra el botón stop */}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button> 
        )} {/* verifica si el cronómetro NO está en funcionamiento, si se cumple muestra el botón reset */}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button> 
        )} {/* verifica si el cronómetro no está en funcionamiento y si el tiempo es mayor que cero. si se cumple se muestra el botón resume */}
      </div>
    </div>
  );
};

export default Stopwatch;
