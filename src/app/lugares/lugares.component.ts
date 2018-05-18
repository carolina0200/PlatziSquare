import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'PlatziSquare';
 /* a = 3;
  b = 4;
  listo = false;
  nombre:string = '';
  apellido:string ='';*/
  
  lat:number = 6.1448366;
  lng: number = -75.3925951;
  lugares = null;
  id:any = null;
  constructor( private route: ActivatedRoute, private lugaresService: LugaresService){
    this.id = this.route.snapshot.params['id'];
    lugaresService.getLugares().subscribe(lugares => {
        this.lugares = lugares;
        console.log(this.lugares);
      })
    /*setTimeout(() => {
      this.listo = true;
    }, 3000)*/
  }
/*
  hacerAlgo(){
    alert('Haciendo algo')
  }*/
}
