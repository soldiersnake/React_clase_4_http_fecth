import React, { useEffect, useState } from "react";

const CrudComponent = () => {
  // Estado para manejar la lista de datos
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState(""); // Para manejar entradas nuevas
  const [editId, setEditId] = useState(null); // Identifica un elemento a editar

  // Cargar datos desde localStorage al montar el componente
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    setData(storedData);
  }, []);

  // Actualizar localStorage cuando se modifique el estado "data"
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // Función GET: Simula la obtención de datos iniciales
  const handleGet = () => {
    const fakeData = [
      { id: 1, title: "Tarea 1" },
      { id: 2, title: "Tarea 2" },
      { id: 3, title: "Tarea 3" },
    ];
    setData(fakeData);
  };

  // Función POST: Agregar un nuevo elemento
  const handlePost = () => {
    if (!inputValue) return;
    const newItem = {
      id: Date.now(), // Simula un ID único
      title: inputValue,
    };
    setData([...data, newItem]);
    setInputValue("");
  };

  // Función PUT: Actualizar un elemento
  const handlePut = () => {
    if (!inputValue || editId === null) return;

    const updatedData = data.map((item) =>
      item.id === editId ? { ...item, title: inputValue } : item
    );
    setData(updatedData);
    setEditId(null);
    setInputValue("");
  };

  // Función DELETE: Eliminar un elemento
  const handleDelete = (id) => {
    const filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };

  // Prepara la edición
  const handleEdit = (item) => {
    setEditId(item.id);
    setInputValue(item.title);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ejemplo CRUD con Fetch Simulado</h2>
      <button onClick={handleGet}>GET: Cargar Datos</button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Agregar o editar elemento"
        />
        <button onClick={editId ? handlePut : handlePost}>
          {editId ? "PUT: Actualizar" : "POST: Agregar"}
        </button>
      </div>

      <ul style={{ marginTop: "20px" }}>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.title}
            <button onClick={() => handleEdit(item)} style={{ marginLeft: "10px" }}>
              Editar
            </button>
            <button onClick={() => handleDelete(item.id)} style={{ marginLeft: "10px" }}>
              DELETE: Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudComponent;
