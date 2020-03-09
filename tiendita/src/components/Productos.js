
import React, { Component, Fragment } from 'react'
import { ProductoServices } from '../services/ProductosService';
import AdminCargando from './AdminCargando';
import $ from 'jquery';
import Modal from './Modal';

 class Productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productos: this.props.productos,
            
        }

    }



    render() {

        return (
            <Fragment>

                
                {/*  */}
            </Fragment>

        )
    }
}


export default Productos;