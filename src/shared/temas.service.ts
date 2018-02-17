import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TemasService {

    temasReference: AngularFireList<any>;
    temasObservable: Observable<any>;

    constructor(public db: AngularFireDatabase){
        // evetos xdxd
        this.temasReference = db.list('eventos');
        this.temasObservable = this.temasReference.snapshotChanges()
         .map(cambios => {
             return cambios.map(cambio => {
                 return cambio.payload.val();
             });
         });
    }
    
}