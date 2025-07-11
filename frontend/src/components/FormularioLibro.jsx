import React, { useState } from 'react';
import './FormularioLibro.css';

const FormularioLibro = () => {
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    editorial: '',
    fecha_publicacion: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        alert('Libro agregado con éxito');
        window.location.reload(); // Recargar libros
      })
      .catch(err => console.error('Error al agregar libro:', err));
  };

  return (
    <form onSubmit={handleSubmit} >
      <h2>📘 Agregar nuevo libro</h2>

      <label htmlFor="titulo">Título</label>
      <input name="titulo" placeholder="Título" onChange={handleChange} required /><br />
      
      <label htmlFor="autor">Autor</label>
      <input name="autor" placeholder="Autor" onChange={handleChange} required /><br />
      
      <label htmlFor="editorial">Editorial</label>
      <input name="editorial" placeholder="Editorial" onChange={handleChange} required /><br />
      
      <label htmlFor="fecha_publicacion">Fecha Publicacion</label>
      <input name="fecha_publicacion" type="date" onChange={handleChange} required /><br />

      <label htmlFor="genero">Genero</label>
      <input name="genero" placeholder='Genero' onChange={handleChange} required/><br />

      <button type="submit">Guardar libro</button>
    </form>
    
  );
};

export default FormularioLibro;