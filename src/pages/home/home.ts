import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';


import { Subject } from '../../shared/Subject';
import { SubjectService } from '../../shared/subject.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  temas: Subject[] = [];
  
  newTema: string = null;

  descripcion: string;

  nombre: string;


  buttons = [{

    
  }];
  constructor(public navCtrl: NavController) {

  }

}
