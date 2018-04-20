import { Component } from '@angular/core';
import { ModalController, PopoverController  } from 'ionic-angular';
import { App, MenuController, ModalOptions } from 'ionic-angular';

import { PopoverSocialMedia } from '../../components/popover-socialmedia/popover-socialmedia';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
    // template: `<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>`
  })
  
  export class ProfilePage {
    constructor(public menuCtrl: MenuController, private modal: ModalController, public popoverCtrl: PopoverController) {}

    avatar: string = 'assets/img/joli3.jpg';
    name: string = 'Lea Jolie';
    level: string = 'Baby';

    public event = {
      month: '2018-04-13',
      timeStarts: '07:43',
      timeEnds: '1990-02-20'
    }

    openEditDashboard() {
      const myEditDashboardOptions: ModalOptions = {
        enableBackdropDismiss: false
      };

      const myEditDashboard = this.modal.create("EditDashboardPage");
      myEditDashboard.present();
    }

    presentPopover(myEvent) {
      let popover = this.popoverCtrl.create(PopoverSocialMedia);
      popover.present({
        ev: myEvent
      });
    }
  }