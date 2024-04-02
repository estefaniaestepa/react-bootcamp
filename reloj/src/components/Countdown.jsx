import React, { useState, useEffect } from "react";
/* import "./Countdown.css"; */

const Countdown = () => {
  const [time, setTime] = useState(""); // hook que almacena el tiempo restante del contador
  useEffect(() => {
    let countDownDate = new Date("July 7, 2024 13:00:00").getTime(); // Definición del temporizador. Se establece una fecha y hora para la finalización del contador. En este caso cuenta el tiempo que queda para el 7 de Julio del 2024.
    let x = setInterval(() => {
      let now = new Date().getTime(); // obtención del tiempo actual --> Date crea un objeto con la fecha y hora actuales. lluego llamamos a getTime para obtener el tiempo en milisegundos desde el 1 de enero de 1970

      let distance = countDownDate - now; // calculo de la distancia entre la fecha actual y la fecha introducida en el contador en newDate (línea 7)

      let days = Math.floor(distance / (1000 * 60 * 60 * 24)); // dividimos la distancia total en milisegundos por la cantidad de milisegundos en un día para obtener la cantidad de días restantes. Math.floor redondea hacia abajo
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) // utilizamos % para obtener el resto de dividir la distancia total en milisegundos por la cantidad de milisegundos en un dia y dividimos este tiempo en horas
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); //cogemos las horas y las dividimos en minutos
      let seconds = Math.floor((distance % (1000 * 60)) / 1000); // same pero para segundos

      setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");  // se actualiza el estado con el tiempo restante formateado como una cadena.

      if (distance < 0) { // si el tiempo restante es menor que cero, se cancela el intervalo de tiempo y se actualiza el estado con un mensaje indicando que ha terminado.
        clearInterval(x);
        setTime("SE TERMINÓ EL TIEMPO");
      }
    }, 1000); // se actualiza la función cada segundo para que se actualize el tiempo almacenado en el hook y mostrado en pantalla
  }, []);
  return (
    <div className="countdown">
      <h2>{time}</h2>
    </div>
  );
};

export default Countdown;
