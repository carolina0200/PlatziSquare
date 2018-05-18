import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {Http} from "@angular/http";
import { Observable } from "rxjs";

@Injectable()

export class LugaresService {
    lugares: any = [
        { id: 1, plan: "Pagado", cercania: 1, distancia: 10, active: true, nombre: 'Donas la pasadita', description: 'Esta descripcion actualmente no esta disponible, consulte periodicamente la pagina' },
        { id: 2, plan: "Gratuito", cercania: 2, distancia: 20, active: false, nombre: 'Ferreteria san Jose', description: 'Esta descripcion actualmente no esta disponible, consulte periodicamente la pagina' },
        { id: 3, plan: "Gratuito", cercania: 1, distancia: 6, active: true, nombre: 'Pasteleria', description: 'Esta descripcion actualmente no esta disponible, consulte periodicamente la pagina' },
        { id: 4, plan: "Pagado", cercania: 3, distancia: 60, active: true, nombre: 'Estadero el pachoncito', description: 'Esta descripcion actualmente no esta disponible, consulte periodicamente la pagina' },
        { id: 5, plan: "Gratuito", cercania: 3, distancia: 100, active: true, nombre: 'Floreria la gardenia', description: 'Esta descripcion actualmente no esta disponible, consulte periodicamente la pagina' },
        { id: 6, plan: "Gratuito", cercania: 2, distancia: 11, active: true, nombre: 'Jugueteria Woody', description: 'Esta descripcion actualmente no esta disponible, consulte periodicamente la pagina' },
        { id: 7, plan: "Gratuito", cercania: 2, distancia: 1.5, active: true, nombre: 'Veterinaria', description: 'Esta descripcion actualmente no esta disponible, consulte periodicamente la pagina' },
        { id: 8, plan: "Gratuito", cercania: 1, distancia: 40, active: true, nombre: 'Corporación busquemos a Dory', description: 'Esta descripcion actualmente no esta disponible, consulte periodicamente la pagina' },
    ];
    constructor(private aFDB:AngularFireDatabase, private http: Http){}
    
    public getLugares() {
        return this.aFDB.list('lugares/').valueChanges();
    }

    public buscarLugar(id) {
        /*this.aFDB.database.refFromURL*/
        return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
    }

    public guardarLugar(lugar){
        this.aFDB.database.ref('lugares/'+ lugar.id).set(lugar);
    }
    public editarLugar(lugar){
       
        this.aFDB.database.ref('lugares/'+ lugar.id).set(lugar);
    }
    public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/xml?address=78-43+diagonal+70f,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
    }
    public getLugar(id){
        return this.aFDB.object('lugares/'+ id).valueChanges();
    }
}