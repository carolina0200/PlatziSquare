import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import swal from 'sweetalert'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lat: number = 6.1448366;
  lng: number = -75.3925951;
  lugar: any = {};
  id: any = null;
  constructor(private route: ActivatedRoute, private lugaresService: LugaresService) {
    this.id = this.route.snapshot.params['id'];
    if (this.id != 'new') {
      this.lugaresService.getLugar(this.id)
        .subscribe((lugar) => {
          this.lugar = lugar;
        });
    }
  }
  guardarLugar() {
    var direccion = this.lugar.calle + ',' + this.lugar.ciudad + ',' + this.lugar.pais;
    this.lugaresService.obtenerGeoData(direccion)
      .subscribe((result) => {
        this.lugar.lat = result.json().results[0].geometry.location.lat;
        this.lugar.lng = result.json().results[0].geometry.location.lng;

        if (this.id != 'new') {
          this.lugaresService.editarLugar(this.lugar)
          swal("Muy bien!", "Editaste el negocio con exito!", "success");
        } else {
          this.lugar.id = Date.now();
          this.lugaresService.guardarLugar(this.lugar);
          swal("Muy bien!", "Creaste el negocio con exito!", "success");
        }

        this.lugar = {};
      }, error => {
        console.log(error)
      })
  }
}