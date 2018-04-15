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
    linkCourses: Array<any> = [];
    indexCoursesTope: number = 2;
    searchQuery: string = '';
    items: string[];

    constructor(public coursesService: CoursesService)  {
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

    getItems(ev: any) {
      this.searchQuery = ev.target.value;
    }

  }