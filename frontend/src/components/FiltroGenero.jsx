import React, { useEffect, useState } from 'react';
import './FiltroGenero.css';

const FiltroGenero = ({ onFiltrar = () => { } }) => {
  const [generos, setGeneros] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState('');

  useEffect(() => {
    const obtenerGeneros = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/libros/generos`);
        const data = await response.json();

        if (Array.isArray(data?.data?.generos)) {
          setGeneros(data.data.generos);
        } else {
          console.error('Formato inesperado de géneros:', data);
          setGeneros([]);
        }
      } catch (error) {
        console.error('Error al obtener géneros:', error);
        setGeneros([]);
      }
    };

    obtenerGeneros();
  }, []);

  const handleChange = (event) => {
    const valor = event.target.value;
    setGeneroSeleccionado(valor);
    onFiltrar(valor);
  };

  return (
    <div className="filtro_genero">
      <label htmlFor="filtro-genero">Filtrar por género:</label>
      <select id="filtro-genero" value={generoSeleccionado} onChange={handleChange}>
        <option value="">Todos</option>
        {generos.map((generoObj, index) => (
          <option key={generoObj.genero + index} value={generoObj.genero}>
            {generoObj.genero}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FiltroGenero;