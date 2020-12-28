import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {fromPromise} from 'rxjs/internal-compatibility';
import {Observable, throwError} from 'rxjs';
import {LodashService} from '../lodash/lodash.service';
// import { isNull } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth,
              private _: LodashService) { }

  // loginWithEmailAndPassword
  loginWithEmailAndPassword(email: string, password: string): Observable<firebase.default.auth.UserCredential | void> {
    if (this._.isNull(email), this._.isNull(password)) {
      return throwError('Pass correct email and password');
    } else {

      return fromPromise(this.fireAuth.signInWithEmailAndPassword(email, password));
    }
  }

  // RegisterWithEmailAndPassword

  registerWithEmailAndPassword(email: string, password: string): Observable<firebase.default.auth.UserCredential | void> {
    if (this._.isNull(email), this._.isNull(password)) {
      return throwError('Pass correct email and password');
    } else {

      return fromPromise(this.fireAuth.createUserWithEmailAndPassword(email, password));
    }
  }

  // Logout
  logout(): Observable<any> {
    return fromPromise(this.fireAuth.signOut());
  }
  // LoginWithGoogle
}
