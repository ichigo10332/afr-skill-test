// API pública: https://jsonplaceholder.typicode.com/users/1
// Responde con un objeto que incluye, entre otros campos: { id: 1, name: "Leanne Graham", ... }

async function obtenerUsuario() {
  // TODO: Usa fetch para obtener los datos del usuario con id 1
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  // TODO: Convierte la respuesta a JSON
  const data = await response.json();

  // TODO: Imprime en consola: "Usuario: " seguido del nombre del usuario
  console.log('Usuario: ' + data.name, 'ID: ' + data.id, 'data: ' + JSON.stringify(data));
}

obtenerUsuario();