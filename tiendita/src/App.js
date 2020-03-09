import React, { Fragment, Component } from 'react';
import './App.css';
import Header from './components/Header';
import { ProductoServices } from './services/ProductosService'
import Productos from './components/Productos';
import Modal from './components/Modal';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      Productos: [],
      prod_id: "",
      prod_nom: "",
      prod_prec: "",
      prod_cant: "",
      edit: false
    }
  }
  showModalEdit(data) {
    this.setState({
      prod_id: data.prod_id,
      prod_nom: data.prod_nom,
      prod_prec: data.prod_prec,
      prod_cant: data.prod_cant,
      edit: true
    })
    window.$("#exampleModal").modal("show");
  }

  traerAmbientes = () => {
    ProductoServices.getProductos().then(resultado => {
      if (this.state.Productos.length === 0) {
        this.setState({
          Productos: resultado.contenido
        })
      }
    })
  }
  nombre = (e) => {
    this.setState({
      prod_nom: e.target.value
    })
  }
  cantidad=(e)=>{
    this.setState({
      prod_cant:e.target.value
    })
  }
  precio=(e)=>{
    this.setState({
      prod_prec:e.target.value
    })
  }
  componentDidMount() {
    this.traerAmbientes()
  }
  tabla(data, indice) {
    return (
      <tr key={indice} >
        <td>{data.prod_id}</td>
        <td>{data.prod_nom}</td>
        <td>{data.prod_prec}</td>
        <td>{data.prod_cant}</td>

        <td>
          {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => this.showModalEdit(this.state.productos)}>Modificar</button> */}

          <button className="btn btn-dark" onClick={() => this.showModalEdit(data)} > update</button>
          <button className="btn btn-warning" onClick={()=> this.eliminar(data.prod_id)}>Eliminar</button>
        </td>
      </tr>
    )
  }

  eliminar(id){
    ProductoServices.eliminar(id).then(resultado => {
      if (this.state.Productos.length === 0) {
        this.setState({
          Productos: resultado.contenido
        })
      }
    })
  }
  render() {
    return (
      <div className="App">
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
              this.state.Productos.map((producto, indice) => (
                this.tabla(producto, indice)
              ))

              //   .map((productos, indice)=>{
              //   <Productos key={indice} productos={productos} />
              // })
            }
          </tbody>
        </table>
        {/* <Modal show={this.state.isOpen}
          onClose={this.toggleModal}
          valor={this.state.valor}
          >
        </Modal> */}
        <div className="modal fade bd-example-modal-lg" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Formulario de producto</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">

                <div className="form-group">
                  <label for="exampleInputEmail1">ID:</label>
                  <input type="text" className="form-control" value={this.state.prod_id} onChange={this.handleChangeNombre} disabled />
                </div>


                <div className="form-group">
                  <label for="exampleInputEmail1">Nombre:</label>
                  <input className="form-control" onChange={this.nombre} value={this.state.prod_nom} onChange={this.nombre} />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Precio:</label>
                  <input type="number" className="form-control" value={this.state.prod_prec} onChange={this.precio}   min="0" />
                </div>

                <div className="form-group">
                  <label for="exampleInputEmail1">Cantidad:</label>
                  <input type="number" className="form-control" value={this.state.prod_cant} onChange={this.cantidad}  max={this.state.prod_cant} min="1" />
                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>

                {
                  this.state.edit ?
                    <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkUpdate()}>Actualizar</button>
                    :
                    <button type="button" className="btn btn-primary" onClick={() => this.sendNetworkProduct()}>Guardar</button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

