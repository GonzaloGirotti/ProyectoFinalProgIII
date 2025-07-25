import React, { useEffect, useState } from 'react';
import TarjetaLibro from './TarjetaLibro';

const ListadoLibros = ({ genero }) => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    let url = `${import.meta.env.VITE_API_URL}/libros`;
    if (genero) {
      url += `?genero=${encodeURIComponent(genero)}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => setLibros(data.data.libros))
      .catch(err => console.error('Error cargando libros:', err));
  }, [genero]);

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {libros.map(libro => (
        <TarjetaLibro key={libro.id} libro={libro} />
      ))}
    </div>
  );
};

export default ListadoLibros;
