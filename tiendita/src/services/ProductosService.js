import {URL_BACK} from '../enviroments/Enviroments';

export class ProductoServices {
    static async getProductos(){
        let rpta = await fetch(`${URL_BACK}/productos`);
        let json = await rpta.json();
            return json;
    }
}