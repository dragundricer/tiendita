import React from 'react';

const Productos = ({productos}) => {
    console.log(productos);
    
    return (
        <tr>
            <td>{productos.prod_id}</td>
            <td>{productos.prod_nom}</td>
            <td>{productos.prod_cant}</td>
            <td>{productos.prod_prec}</td>
            <td>
                <button className="btn btn-danger">Eliminar</button>
                <button className="btn btn-warning">Modificar</button>
            </td>
        </tr>
    );
}

export default Productos;
