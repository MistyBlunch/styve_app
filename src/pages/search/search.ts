import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CoursesService } from '../../shared/courses.service';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
  })

  export class SearchPage implements OnInit{
    courses: Array<any> = [];
    topicLink: Array<any> = [];
    indexCoursesTope: number = 2;
// para el searchbar:
    searchQuery: string = '';
    items: string[];

    constructor(public coursesService: CoursesService)  {
      this.initializeItems();  //searchbar
    }

    ngOnInit() {
      this.coursesService.getCourses().subscribe(courses => {
        this.courses = courses;
        console.log(courses);
      })
    }
    
    getInitialCourses() {
      return this.courses.slice(0, this.indexCoursesTope);
    }

    aumentarIndexCoursesTope() {
      this.indexCoursesTope = this.indexCoursesTope + 3;
    }

    // heartsCount() {
    //   this.
    // }

    initializeItems() {
      this.items = [
        // 'CSS',
        // 'Float',
        // 'Microncontroller',
        // 'IoT',
        // 'Arduino', 
        // 'Flexbox',
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

  }