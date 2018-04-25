import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, PopoverController } from 'ionic-angular';

import { PopoverSocialMedia } from '../../components/popover-socialmedia/popover-socialmedia';

import { CoursesService } from '../../shared/courses.service'
import { LoginService } from '../../shared/login.service';

@IonicPage()
@Component({
  selector: 'page-other-profile',
  templateUrl: 'other-profile.html',
})
export class OtherProfilePage {

  courses: Array<any> = [];
  coursesLink: Array<any> = [];
  user: Object = {};
  indexCoursesTope: number = 1;

  constructor(
    public popoverCtrl: PopoverController,
    public coursesService: CoursesService,
    private loginService: LoginService
  ) {}

  avatar: string = 'assets/imgs/girl3.png';
  // level: string = 'Baby';

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

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverSocialMedia);
    popover.present({
      ev: myEvent
    });

  }
  getInitialCourses() {
    return this.courses.slice(0, this.indexCoursesTope);
  }

  aumentarIndexCoursesTope() {
    this.indexCoursesTope = this.indexCoursesTope + 1;
  }
}