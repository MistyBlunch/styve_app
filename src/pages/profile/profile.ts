import { Component } from '@angular/core';
import { ModalController, PopoverController  } from 'ionic-angular';
import { App, MenuController, ModalOptions } from 'ionic-angular';

import { CoursesService } from '../../shared/courses.service'

import { PopoverSocialMedia } from '../../components/popover-socialmedia/popover-socialmedia';
import { LoginService } from '../../shared/login.service';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
    // template: `<button ion-button [navPush]="pushPage" [navParams]="params">Go</button>`
  })
  
  export class ProfilePage {
    courses: Array<any> = [];
    linkCourses: Array<any> = [];
    user: Object = {};

    constructor(
      public menuCtrl: MenuController, 
      private modal: ModalController, 
      public popoverCtrl: PopoverController,
      public coursesService: CoursesService,
      private loginService: LoginService
    ) {}

    avatar: string = 'assets/imgs/girl3.png';
    level: string = 'Baby';

    public event = {
      month: '2018-04-13',
      timeStarts: '07:43',
      timeEnds: '1990-02-20'
    }

    ngOnInit() {
      this.coursesService.getCourses().subscribe(courses => {
        this.courses = courses;
        console.log(courses);
      });
      this.user = this.loginService.getUser();
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