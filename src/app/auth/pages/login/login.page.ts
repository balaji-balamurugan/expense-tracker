import { AngularFirestore } from '@angular/fire/compat/firestore';
/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { appPath } from 'src/app/shared/constants/firepath.constant';
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'et-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  ismyTextFieldType = false;
  loginForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _firestore: FirestoreService,
    private _fbDB: AngularFirestore,
    private _fb: NonNullableFormBuilder,
  ) {
    this.loginForm = this._fb.group({
      email: this._fb.control('balajibalamurugan236@gmail.com'),
      password: this._fb.control('123456'),
    });
  }

  async signInWithGoogle(): Promise<void> {
    try {
      const { user } = await this._authService.googleSignup();
      console.log(user);
      if (user) {
        this._router.navigate(['/overview']);
      }
    } catch (err) {
      console.error(err);
    }
  }

  async signIn(): Promise<void> {
    const { email, password } = this.loginForm.value;
    try {
      const { user } = await this._authService.emailSignIn(
        email as string,
        password as string
      );
      console.log(user);
      if (user) {
        try {
          await this._firestore.colRoot(appPath)
            .doc(user.uid)
            .set({
              email: user.email,
              name: user.displayName
            });
          this._router.navigate(['/overview']);
        } catch (err: any) {
          console.error(err.code as FirebaseError);
        }
      }
    } catch (err: any) {
      console.error(err.code as FirebaseError);
    }
  }
}
