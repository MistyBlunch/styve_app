import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CoursesService {

    ref: AngularFireList<any>;
    courses: Observable<any>;

    constructor(public db: AngularFireDatabase) {
        this.ref = db.list('cursos');
        this.courses = this.ref.snapshotChanges().map(cambios =>{
            return cambios.map(cambio => ({ key: cambio.payload.key, ...cambio.payload.val()}));
        });
    }
    
    getCourses(): Observable<any> {
        return this.courses;
    }
}