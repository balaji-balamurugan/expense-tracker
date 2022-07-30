/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

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
    private _auth: AngularFireAuth,
    private _fb: NonNullableFormBuilder,
    private _fireDB: FirestoreService
  ) {
    this.loginForm = this._fb.group({
      email: this._fb.control('balajibalamurugan236@gmail.com'),
      password: this._fb.control('123456'),
    });
  }

  async addData(): Promise<void> {
    await this._fireDB.add('test', {
      hello: 'hello'
    });
    console.log('successfully');
  }


  async signIn(): Promise<void> {
    const { email, password } = this.loginForm.value;
    const { user } = await this._auth.createUserWithEmailAndPassword(
      email as string,
      password as string
    );
    console.log(user);
  }
}
