import { URL_BACK } from '../enviroments/Enviroments';



export class ProductoServices {
    static async getProductos() {
        let rpta = await fetch(`${URL_BACK}/productos`);
        let json = await rpta.json();
        return json;
    }
    static async getProducto(id) {

        let rpta = await fetch(`${URL_BACK}/productos/${id}`);
        console.log(`${URL_BACK}/productos/${id}`);

        let json = await rpta.json();
        console.log(json);
        return json;

    }
    static async eliminar(id) {


        const requestOptions = {
            method: 'DELETE'
          };
        
          // Note: I'm using arrow functions inside the `.fetch()` method.
          // This makes it so you don't have to bind component functions like `setState`
          // to the component.
          fetch(`${URL_BACK}/productos/${id}`, requestOptions).then((response) => {
            return response.json();
          }).then((result) => {
            // do what you want with the response here
          });

        // // url de backend
        // const baseUrl = `${URL_BACK}/productos/${id}`    // parameter data post
        // // network
        // axios.delete(baseUrl)
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        // })
        // console.log("eliminar");

        // var misCabeceras = new Headers();
        // var miInit = {
        //     method: 'DELETE',
        //     headers: misCabeceras,
        //     mode: 'cors',
        //     cache: 'default'
        // };
        // let rpta = await fetch(`${URL_BACK}/productos/${id}`, miInit);
    }
}