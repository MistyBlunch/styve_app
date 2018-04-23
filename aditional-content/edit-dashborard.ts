// import { Component, ViewChild } from '@angular/core';
// import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';
// import { CoursesService } from '../../shared/courses.service';

// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';

// @IonicPage()
// @Component({
//   selector: 'page-edit-dashboard',
//   templateUrl: 'edit-dashboard.html',
// })

// export class EditDashboardPage {
//   // for me
//   // ref: AngularFireList<any>;
//   // courses: Observable<any>;

//   curso = {key: null, title:null, date:null, hour: null};
//   key = null;
// //end for me

//   constructor(private navParams: NavParams, 
//     private view: ViewController,
//     public navCtrl: NavController,
//     public coursesService: CoursesService) { //for me, the last
//     //for me
//     // this.courses = coursesService.getCourse(2);
//     this.key = navParams.get('key');
//     if(this.key != 0) {
//       coursesService.getCourse(this.key)
//       .subscribe(curso => {
//         this.curso = curso;
//       })
//     }
//   }

//   closeEditDashboard() {
//     this.view.dismiss();
//   }

//   // ionViewDidLoad() {
//   //   console.log('ionViewDidLoad EditDashboardPage');
//   // }

//   public event = {
//     month: '2018-04-13',
//     timeStarts: '07:43',
//     timeEnds: '1990-02-20'
//   }

//   addCourse() {
//     if(this.key !=0) {
//       this.coursesService.editCurso(this.curso);
//       alert("Class added Succesfully!");
//     }else{
//       this.curso.key = Date.now();
//       this.coursesService.createCurso(this.curso);
//       alert("Class added Succesfully!");
//     }
//     this.navCtrl.pop();
//     }
//   deleteCurso() {
//     this.coursesService.deleteCurso(this.curso);
//     alert("class successfully eliminated");
//     this.navCtrl.pop();
//   }
// }