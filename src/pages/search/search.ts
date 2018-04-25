import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Observable } from 'rxjs/Observable';
import { CoursesService } from '../../shared/courses.service';
import { OtherProfilePage } from '../../pages/other-profile/other-profile';
import { LoginService } from '../../shared/login.service';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
  })

  export class SearchPage implements OnInit{
    courses: Array<any> = [];
    coursesLink: Array<any> = [];
    indexCoursesTope: number = 2;
// para el searchbar:
    searchQuery: string = '';
    items:  Array<any> = [];

    user: Object = {};

    constructor(
      public coursesService: CoursesService,
      public navCtrl: NavController,
      private loginService: LoginService)  {
      this.initializeItems();  //searchbar
    }

    ngOnInit() {
      this.coursesService.getCourses().subscribe(courses => {
        this.courses = courses;
        console.log(courses);
      });
      this.user = this.loginService.getUser();
    }
    
    getInitialCourses() {
      return this.courses.slice(0, this.indexCoursesTope);
    }

    aumentarIndexCoursesTope() {
      this.indexCoursesTope = this.indexCoursesTope + 3;
    }

    initializeItems() {
      this.items = [
        this.courses,
      ]
    }

    getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();
  
      // set val to the value of the searchbar
      let val = ev.target.value;
  
      // if the value is an empty string don't filter the items
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }

    showOtherProfile() {
      this.navCtrl.push(OtherProfilePage);
    }

    getUser() {
      return this.user;
    }
  }