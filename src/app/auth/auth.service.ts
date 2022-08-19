/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { updateProfile } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userAuthState!: firebase.User | null;
  private _userAuthState = new Subject<firebase.User | null>();

  constructor(private _fbAuth: AngularFireAuth) {
    this._fbAuth
      .authState
      .subscribe((authState: firebase.User | null) => {
        console.log('hitting firebase auth', authState);
        if (authState) {
          this.userAuthState = authState;
          this._userAuthState.next(authState);
        } else {
          this.userAuthState = null;
          this._userAuthState.next(null);
        }
      });
  }

  get userAuthState$(): Observable<firebase.User | null> {
    return this._userAuthState.asObservable();
  }

  emailSignup(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this._fbAuth.createUserWithEmailAndPassword(email, password);
  }

  async emailSignIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return await this._fbAuth.signInWithEmailAndPassword(email, password);
  }

  async googleSignup(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return await this._fbAuth.signInWithPopup(provider);
  }

  signOut(): Promise<void> {
    return this._fbAuth.signOut();
  }

  forgotPassword(email: string): Promise<void> {
    return this._fbAuth.sendPasswordResetEmail(email);
  }

  async verifyPasswordResetCode(code: string): Promise<any> {
    return await this._fbAuth.verifyPasswordResetCode(code)
      .then(email => email)
      .catch((error) => {
        console.log(error.message);
      });
  }

  async confirmPasswordReset(code: string, newPassword: string): Promise<boolean> {
    return await this._fbAuth.confirmPasswordReset(code, newPassword)
      .then(() => true)
      .catch((error) => {
        console.log(error.message);
        return false;
      });
  }

  updateUserProfile(userDetails: firebase.User, displayName: string): void {
    updateProfile(userDetails, { displayName })
      .then(() => console.log('name updated!'))
      .catch((err: any) => console.log(err));
  }

  async signUpWithMobile(mobNo: string, recaptcha: any): Promise<any> {
    return await this._fbAuth.signInWithPhoneNumber(mobNo, recaptcha);
  }
}
