import React from 'react';

const TarjetaLibro = ({ libro }) => {
  const fecha = new Date(libro.fecha_publicacion).toLocaleDateString();

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '250px',
      backgroundColor: 'black',
    }}>
      <h3>{libro.titulo}</h3>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Editorial:</strong> {libro.editorial}</p>
      <p><strong>Publicado:</strong> {fecha}</p>
    </div>
  );
};

export default TarjetaLibro;