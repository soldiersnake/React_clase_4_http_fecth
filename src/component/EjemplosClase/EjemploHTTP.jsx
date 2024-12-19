// EJEMPLO GET
export const obtenerDatos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Datos obtenidos:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
};

// EJEMPLO POST
export const enviarDatos = async () => {
  const nuevoPost = {
    title: "Nuevo Post",
    body: "Contenido del nuevo post",
    userId: 1,
  };

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoPost),
    });
    const data = await response.json();
    return data;
    console.log("Respuesta del servidor:", data);
  } catch (error) {
    console.error("Error al enviar datos:", error);
  }
};

// EJEMPLO PUT
export const actualizarDatos = async () => {
  const datosActualizados = {
    title: "Post Actualizado",
    body: "Contenido actualizado del post",
    userId: 1,
  };

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosActualizados),
      }
    );
    const data = await response.json();
    return data;
    console.log("Datos actualizados:", data);
  } catch (error) {
    console.error("Error al actualizar datos:", error);
  }
};

// EJEMPLO DELETE
export const eliminarDatos = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      console.log("Recurso eliminado correctamente.");
    } else {
      console.log("Error al eliminar el recurso.");
    }
    return response;
  } catch (error) {
    console.error("Error al eliminar datos:", error);
  }
};
