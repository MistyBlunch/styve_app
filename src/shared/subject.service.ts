import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { Subject } from './Subject'

@Injectable()
export class SubjectService {

    subjectRef: AngularFireList<any>;
    subjectObs: Observable<Subject[]>;

    preguntasRef: AngularFireList<any>;


    constructor(public db: AngularFireDatabase){
        this.subjectRef = db.list('subject');
        this.preguntasRef = db.list('preguntas'); 
        this.subjectObs = this.subjectRef.snapshotChanges().map(changes => {

            return changes.map(cambio => ({ key: cambio.payload.key, ...cambio.payload.val()}));
            //  return {
            //      key: cambio.key,
            //     ...cambio.payload.val(),
            //  }
            });
        }

    getSubject(): Observable<Subject[]> {
        return this.subjectObs;
    }

    getPreguntas(subjectId: string) {
        return this.preguntasRef.snapshotChanges().map(changes => {
            return changes.map(cambio => {
                return {
                    key: cambio.key,
                ...cambio.payload.val(),
                }
            }).filter(pregunta => {
                return pregunta.tema === subjectId
            });
        })
    }
    
}