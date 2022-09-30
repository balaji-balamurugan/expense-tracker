/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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
    private router: Router,
    private authService: AuthService,
    private firestore: FirestoreService,
    private afs: AngularFirestore,
    private fb: NonNullableFormBuilder,
  ) {
    this.loginForm = this.fb.group({
      email: this.fb.control('balajibalamurugan236@gmail.com'),
      password: this.fb.control('123456'),
    });
  }

  async signInWithGoogle(): Promise<void> {
    try {
      const { user } = await this.authService.googleSignup();
      if (user) {
        const ref = this.afs.collection('app').doc(user.uid);
        await ref.set({
          email: user.email,
          uid: user.uid
        });
        this.router.navigate(['/overview']);
      }
    } catch (err) {
    }
  }

  async signIn(): Promise<void> {
    const { email, password } = this.loginForm.value;
    try {
      const { user } = await this.authService.emailSignIn(
        email as string,
        password as string
      );
      if (user) {
        try {
          await this.firestore.colRoot(appPath)
            .doc(user.uid)
            .set({
              email: user.email,
              uid: user.uid
            });
          this.router.navigate(['/overview']);
        } catch (err: any) {
          console.error(err.code as FirebaseError);
        }
      }
    } catch (err: any) {
      console.error(err.code as FirebaseError);
    }
  }
}
