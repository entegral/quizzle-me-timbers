import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  login(email: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice Alex, login worked.');
        console.log('value = ', value)
      }).catch(err => {
        console.log('Something broke during login ', err.message)
      });
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
