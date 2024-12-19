import React, { useState } from "react";

// Componente Filter: Recibe una prop llamada "render" que es una función para renderizar contenido.
const Filter = ({ render }) => {
  // 1. useState para manejar el valor del input
  const [value, setValue] = useState("");

  // 2. Función para manejar cambios en el input y actualizar el estado
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div>
      {/* 3. Input controlado que actualiza el estado "value" */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Filtrar..."
      />

      {/* 4. Renderiza lo que se pasa en la prop "render", enviándole el valor actual */}
      {render(value)}
    </div>
  );
};

// Componente TaskList: Usa el componente Filter y pasa una función render como prop
const TaskList = () => {
  const tasks = ["Comprar", "Estudiar", "Cocinar"]; // Lista de tareas

  return (
    <Filter
      render={(filterValue) => (
        <ul>
          {tasks
            .filter((task) =>
              task.toLowerCase().includes(filterValue.toLowerCase())
            )
            .map((task, index) => (
              <li key={index}>{task}</li>
            ))}
        </ul>
      )}
    />
  );
};

// Exporta el componente principal TaskList
export default TaskList;
