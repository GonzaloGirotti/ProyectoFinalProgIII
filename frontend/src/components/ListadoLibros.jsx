import React, { useEffect, useState } from 'react';
import TarjetaLibro from './TarjetaLibro';

const ListadoLibros = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/libros`)
      .then(res => res.json())
      .then(data => setLibros(data.data.libros))
      .catch(err => console.error('Error cargando libros:', err));
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {libros.map(libro => (
        <TarjetaLibro key={libro.id} libro={libro} />
      ))}
    </div>
  );
};

export default ListadoLibros;