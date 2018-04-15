import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


import { General } from '../../shared/General';
import { GeneralService } from '../../shared/general.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {

  temas: General[] = [];
  
  newTema: string = null;

  descripcion: string;

  nombre: string;


  buttons = [{

    
  }];
  constructor(
    public navCtrl: NavController, 
    public generalesService: GeneralService
  ) {  //lo que va en parentesis es para inyectar algo.
  }

  ngOnInit() {
    this.generalesService.getGenerales()
    .subscribe(generales => {  //generales es la var que nosotros creamos
      this.temas = generales;
      console.log(this.temas); //para mostrar en la consola
    })
  }
}
