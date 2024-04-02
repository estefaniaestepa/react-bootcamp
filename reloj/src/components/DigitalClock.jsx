import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [clockState, setClockState] = useState(); // hook que almacena la hora actual del reloj

  useEffect(() => {
    setInterval(() => { // configuramos un temporizador que se ejecutará cada segundo. En cada ejecución del temporizador creamos un nuevo objeto Date que representa la hora actual y actualizamoe el estado clockState con la hora formateada como una cadena utilizando toLocaleTimeString()
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;