import React from 'react';
import ListadoLibros from './components/ListadoLibros';
import FormularioLibro from './components/FormularioLibro';
import './App.css';

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <FormularioLibro />
      <hr />
      <h2>Catalogo de libros:</h2>
      <ListadoLibros />
    </div>
  );
};

export default App;
