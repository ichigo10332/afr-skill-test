import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);
  async function obtenerUsuario() {
    setCargando(true);
    try {
      const response = await fetch(API_publica);

      const data = await response.json();

      setUsuario(data);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  }
  useEffect(() => {
    // TODO: Usa fetch para obtener los datos de:
    // https://jsonplaceholder.typicode.com/users/1
    // Guarda el resultado en "usuario" con setUsuario
    // y cambia "cargando" a false cuando finalice
    /* tu código aquí */
    obtenerUsuario();
  }, []);

  if (cargando) return <ActivityIndicator />;

  return (
    <View>
      <Text>{usuario?.name}</Text>
    </View>
  );
}
