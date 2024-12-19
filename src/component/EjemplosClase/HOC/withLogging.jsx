import React, { useEffect } from "react";

// 1. Definición del HOC (Higher-Order Component)
// Un HOC es una función que toma un componente como parámetro y devuelve un nuevo componente.
const withLogging = (WrappedComponent) => {
  // 2. Componente interno que agrega la funcionalidad de logging
  const ComponentWithLogging = (props) => {
    // 3. Hook useEffect para mostrar logs en la consola
    // Se ejecuta al montar y desmontar el componente
    useEffect(() => {
      console.log("Componente montado: ComponentWithLogging"); // Log al montar

      return () => {
        console.log("Componente desmontado: ComponentWithLogging"); // Log al desmontar
      };
    }, []); // El array vacío asegura que se ejecute solo una vez (en montaje y desmontaje).

    // 4. Renderiza el componente original (WrappedComponent) y le pasa las props originales
    return <WrappedComponent {...props} />;
  };

  // 5. Retorna el componente "mejorado" (con funcionalidad adicional)
  return ComponentWithLogging;
};

// 6. Componente original que será "envuelto" por el HOC
// Este componente no tiene lógica especial, solo muestra un mensaje.
const SimpleComponent = () => {
  return (
    <h2 style={{ background: "red", color: "blue" }}>
      Hola, soy un componente simple.
    </h2>
  );
};

// 7. Aplicamos el HOC al componente SimpleComponent
// "ComponentWithLogging" ahora tiene la funcionalidad de logging adicional.
const ComponentWithLogging = withLogging(SimpleComponent);

// 8. Exportamos el nuevo componente con logging
export default ComponentWithLogging;
