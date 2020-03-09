import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { ProductoServices } from '../services/ProductosService';
import AdminCargando from './AdminCargando';

 class Modal extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.valor);
        
        this.state = {
            cargando: true,
            producto: [],
            valor2:this.props.valor
        }
        
    }
    componentDidMount(){

    }
    componentDidUpdate(prevProps){
    }
    formulario(){
        return(
            <form>
                <input type="text" value={this.props.valor}/>
            </form>
        )
    }
    cargar(){
        ProductoServices.getProducto(this.state.valor2).then(resultado => {
            console.log(this.state.valor2);
            
            if (this.state.producto.length === 0) {
                console.log(resultado.contenido);
                
                this.setState({
                    producto: resultado.contenido,
                    cargando: false
                })
            }
        })
    }
    render() {
        if (!this.props.show) {
            return null;
        }
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 50
          };
      
          // The modal "window"
          const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
          };
          if (this.state.cargando) {
            return <AdminCargando />;
          }
        return (
                <div className="back" style={{ backdropStyle }}>
                    <div className="pop" style={{ modalStyle }}>
                        <div className="pie">
                            {this.formulario}
                            <button onClick={this.props.onClose}>
                                Close
            </button>
                        </div>
                    </div>
                </div>
        )
    }
}
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };

  export default Modal;