/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'et-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  ismyTextFieldType!: boolean;
  loginForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }>;

  constructor(
    private _router: Router,
    private _authService: AuthService,
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
        this._router.navigate(['/overview']);
      }
    } catch (err: any) {
      console.error(err.code as FirebaseError);
    }
  }
}
