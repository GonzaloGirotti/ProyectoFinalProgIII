import React from 'react';
import ListadoLibros from './components/ListadoLibros';
import FormularioLibro from './components/FormularioLibro';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <FormularioLibro />
      <hr />
      <h2 className='catalogo-header'>Catalogo de libros:</h2>
      <ListadoLibros />
    </div>
  );
};

export default App;
