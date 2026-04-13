import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // TODO: Usa fetch para obtener los datos de:
    // https://jsonplaceholder.typicode.com/users/1
    // Guarda el resultado en "usuario" con setUsuario
    // y cambia "cargando" a false cuando finalice
    /* tu código aquí */
      async function obtenerUsuario() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        setUsuario(data);
        setCargando(false);
      }
      obtenerUsuario();
  }, []);

  if (cargando) return <ActivityIndicator />;

  return (
    <View>
      <Text>{usuario?.name}</Text>
      <Text>{usuario?.id}</Text>
    </View>
  );
}