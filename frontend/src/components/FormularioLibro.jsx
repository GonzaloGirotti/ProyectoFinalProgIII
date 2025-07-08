import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <h2>📘 Agregar nuevo libro</h2>
      <input name="titulo" placeholder="Título" onChange={handleChange} required /><br />
      <input name="autor" placeholder="Autor" onChange={handleChange} required /><br />
      <input name="editorial" placeholder="Editorial" onChange={handleChange} required /><br />
      <input name="fecha_publicacion" type="date" onChange={handleChange} required /><br />
      <button type="submit">Guardar libro</button>
    </form>
  );
};

export default FormularioLibro;