
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { GooglePlus } from '@ionic-native/google-plus';

@Injectable()
export class LoginService {
  
  user: Object = null;
  constructor(
    private googlePlus: GooglePlus,
    private db: AngularFireDatabase
  ) {}

  login(): Promise<any> {
    return new Promise((resolve, reject) => {
      // this.googlePlus.login({})
      //   .then(tempUser => {
          const tempUser = {
            displayName: 'Alexander',
            email: 'alwongm@gmail.com',
            imageUrl: 'url'
          };
          this.user = tempUser;
          this.db.list('users', 
            ref => ref.orderByChild('email').equalTo(tempUser.email)
          )
          .snapshotChanges()
          .forEach(cambios => {
            const foundUsers = cambios.map(cambio => cambio.payload.val());
            if (foundUsers.length === 0) {
              this.db.list('users').push(tempUser);
            } 
            this.user = tempUser;
            resolve(this.user);
          });       
        // });        
    });
  }

  logout(): Promise<any> {
    return this.googlePlus.logout();
  }

  getUser() {
    return this.user;
  }
  
}