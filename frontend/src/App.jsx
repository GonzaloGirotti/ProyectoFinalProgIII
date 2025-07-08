import React from 'react';
import ListadoLibros from './components/ListadoLibros';
import FormularioLibro from './components/FormularioLibro';

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Catálogo de Libros</h1>
      <FormularioLibro />
      <hr />
      <ListadoLibros />
    </div>
  );
};

export default App;
