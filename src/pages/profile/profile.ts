import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
  })
  export class ProfilePage {

    avatar: string = 'assets/img/joli3.jpg';
    name: string = 'Lea Jolie';
    level: string = 'Baby';

    constructor(public navCtrl: NavController) {
  
    }
  
  }