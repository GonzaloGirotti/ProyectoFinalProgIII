import React, { useState } from 'react';


const DropdownMenu = ({ libro }) => {
  const [selectedOption, setSelectedOption] = useState(libro.estado_lectura || 'Estado');

  const handleSelect = (option) => {
    setSelectedOption(option);

    fetch(`${import.meta.env.VITE_API_URL}/libros/${libro.id}/estado`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado_lectura: option }),
      }
    )
      .then(response => response.json())
      .then(() => {
        alert('Estado actualizado correctamente');
        window.location.reload(); // Recargar libros
      })
      .catch(error => {
        console.error('Error al actualizar el estado:', error);
      });
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedOption}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><button className="dropdown-item" onClick={() => handleSelect('No leido')}>No leido</button></li>
        <li><button className="dropdown-item" onClick={() => handleSelect('Por leer')}>Por leer</button></li>
        <li><button className="dropdown-item" onClick={() => handleSelect('Leido')}>Leido</button></li>
      </ul>
    </div>
  );
};


const TarjetaLibro = ({ libro }) => {
  const fecha = new Date(libro.fecha_publicacion).toLocaleDateString();

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      width: '250px',
      backgroundColor: 'black',
      color: 'white'
    }}>
      <h3>{libro.titulo}</h3>
      <p><strong>Autor:</strong> {libro.autor}</p>
      <p><strong>Editorial:</strong> {libro.editorial}</p>
      <p><strong>Publicado:</strong> {fecha}</p>
      <p><strong>Género:</strong> {libro.genero}</p>
      <p><strong>Estado:</strong> {libro.estado_lectura}</p>
      <p><strong>Reseña:</strong> {libro.reseña || 'No hay reseña disponible'}</p>
      <p><strong>Valoración:</strong> {libro.valoracion ? '⭐'.repeat(libro.valoracion) : 'No valorado'}</p>

      <DropdownMenu libro={libro} />

    </div>
  );
};

export default TarjetaLibro;