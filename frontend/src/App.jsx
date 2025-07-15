// App.jsx
import React, { useState } from 'react';
import ListadoLibros from './components/ListadoLibros';
import FormularioLibro from './components/FormularioLibro';
import FiltroGenero from './components/FiltroGenero';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

const App = () => {
  const [generoSeleccionado, setGeneroSeleccionado] = useState('');

  return (
    <div style={{ padding: "2rem" }}>
      <FormularioLibro />
      <hr />
      <h2 className='catalogo-header'>Catálogo de libros:</h2>
      <hr />
      <FiltroGenero onFiltrar={setGeneroSeleccionado} />
      <hr />
      <ListadoLibros genero={generoSeleccionado} />
    </div>
  );
};

export default App;
