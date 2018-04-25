import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { CoursesService } from '../../shared/courses.service';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-dashboard',
  templateUrl: 'edit-dashboard.html',
})
export class EditDashboardPage {

  courses: Array<Object> = [];
  event = {
    date: '2018-04-13',
    timeStarts: '07:43',
    timeEnds: '1990-02-20',
    selectedCourseKey: null,
    title: null,
    topicLink: null
  }

  constructor(
    private navParams: NavParams, 
    private view: ViewController, 
    private alertCtrl: AlertController,
    private coursesService: CoursesService) {
  } 

  closeEditDashboard() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses.map(c => ({
        value: c.key,
        label: c.name,
        type: 'radio'
      }));
    })
  }  

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Select a course',
      inputs: this.courses,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: key => {
            this.event.selectedCourseKey = key;
          }
        }
      ]
    });
    alert.present();
  }

  saveEvent(): void {
    this.coursesService.addCourseTopic(
      this.event
    ).then(result => {
      this.view.dismiss();
    });
  }
}
