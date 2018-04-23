import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

@Injectable()
export class CoursesService {

    ref: AngularFireList<any>;
    courses: Observable<any>;

    constructor(
        private db: AngularFireDatabase,
        private loginService: LoginService
    ) {
        this.ref = this.db.list('cursos');
        this.courses = this.ref
            .snapshotChanges()
            .map(cambios => {
                return cambios.map(cambio => {
                    const topics = cambio.payload.val().topics;     
                    return Object.assign({}, { 
                        key: cambio.payload.key, 
                        ...cambio.payload.val()
                    },
                    {
                        topics: Object.keys(topics).map(index => topics[index])
                    }
                    )
                });
        });
    }
    
    getCourses(): Observable<any> {
        return this.courses;
    }

    addCourseTopic(event: any): Promise<any> {
        const user = this.loginService.getUser();
        const result = this.db.list(`cursos/${event.selectedCourseKey}/topics`)
            .push({
                members: 0,
                respEmail: user['email'],
                respImg: '../../assets/imgs/girl2.png',
                respName: user['displayName'],
                topicName: event.title,
                date: event.date,
                timeStarts: event.timeStarts
            });
        return new Promise(resolve => resolve(result));
    }
    
}