import React, { useState, useEffect } from "react";

// Polling: El cliente solicita datos al servidor repetidamente en intervalos.
const PollingExample = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Consulta realizada');
      
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Limpia el intervalo
  }, []);

  return <p>Hora actual: {time}</p>;
};

export default PollingExample;
