import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { ProductoServices } from './services/ProductosService'
import Productos from './components/Productos';

function App() {

  const [productos, guardarProducto] = useState([])
  ProductoServices.getProductos().then(resultado => {
    if (productos.length === 0) {
      guardarProducto(resultado.contenido)
    }
  })

  return (
    <Fragment>
      <Header />
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Opcion</th>
          </tr>
        </thead>
        <tbody>
          {
            productos.map((productos,indice)=>(
              <Productos key={indice} productos={productos}/>
            ))
          }
        </tbody>
      </table>

    </Fragment>

  );
}

export default App;
