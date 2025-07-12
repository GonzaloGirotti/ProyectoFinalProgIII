import React from 'react';
import ListadoLibros from './components/ListadoLibros';
import FormularioLibro from './components/FormularioLibro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import FiltroGenero from './components/FiltroGenero';

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <FormularioLibro />
      <hr />
      <h2 className='catalogo-header'>Catalogo de libros:</h2>
      <hr />
      <FiltroGenero />
      <hr />
      <ListadoLibros />
    </div>
  );
};

export default App;
