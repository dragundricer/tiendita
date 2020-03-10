import { URL_BACK } from '../enviroments/Enviroments';



export class ProductoServices {
    static async getProductos() {

        let rpta = await fetch(`${URL_BACK}/productos/`);
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
    static async insertar(nom,cant,pre) {
        fetch(`${URL_BACK}/productos/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prod_nom: nom,
                prod_cant: cant,
                prod_prec: pre,
                cat_id: 1
            })
        })
        .then(res=>res.json()).then((result)=>{
            console.log(result);
            
        },(error)=>{
            console.log(error);
            
        })
    }
    static async update(id,nom,cant,pre) {
        fetch(`${URL_BACK}/productos/${id}/`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prod_nom: nom,
                prod_cant: cant,
                prod_prec: pre,
                cat_id: 1
            })
        })
        .then(res=>res.json()).then((result)=>{
            console.log(result);
            
        },(error)=>{
            console.log(error);
            
        })
        // const requestOptions = {
        //     method: 'DELETE'
        //   };

        //   // Note: I'm using arrow functions inside the `.fetch()` method.
        //   // This makes it so you don't have to bind component functions like `setState`
        //   // to the component.
        //   fetch(`${URL_BACK}/productos/${id}`, requestOptions).then((response) => {
        //     return response.json();
        //   }).then((result) => {
        //     // do what you want with the response here
        //   });

        // url de backend
        // const baseUrl = `${URL_BACK}/productos/${id}`    // parameter data post
        // // network
        // axios.delete(baseUrl)
        // .then(res => {
        //   console.log(res);
        //   console.log(res.data);
        // })
        // console.log("eliminar");

   

        // var url = `${URL_BACK}/productos/${id}`;
        // var xhr = new XMLHttpRequest();
        // console.log("hola");
        // xhr.open("DELETE", url, true);
        // console.log("eliminar");
        // xhr.onload = function () {
        //     var users = JSON.parse(xhr.responseText);
        //     console.log("eliminar");
        //     if (xhr.readyState == 4 && xhr.status == "200") {
        //         console.log("yes");

        //     } else {
        //         console.error(users);
        //     }
        // }
    }
}