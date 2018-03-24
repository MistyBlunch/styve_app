import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { General } from './General'

@Injectable()
export class GeneralService {

    ref: AngularFireList<any>;
    generalObs: Observable<General[]>;

    preguntasRef: AngularFireList<any>;


    constructor(public db: AngularFireDatabase){
        this.ref = db.list('generales');  //tiene que estar igual que en firebase ***
        // this.preguntasRef = db.list('preguntas'); 

        this.generalObs = this.ref.snapshotChanges().map(changes => {
        //codigo marciano --> se crea uno para cada obs o var 
            return changes.map(cambio => ({ key: cambio.payload.key, ...cambio.payload.val()}));
            //  return {
            //      key: cambio.key,
            //     ...cambio.payload.val(),
            //  }
            });
        }

    getGenerales(): Observable<General[]> {
        return this.generalObs;
    }

    //por el momento no es necesario  prguntasRef ^^

    // getPreguntas(generalId: string) {
    //     return this.preguntasRef.snapshotChanges().map(changes => {
    //         return changes.map(cambio => {
    //             return {
    //                 key: cambio.key,
    //             ...cambio.payload.val(),
    //             }
    //         }).filter(pregunta => {
    //             return pregunta.tema === generalId
    //         });
    //     })
    // }
    
}