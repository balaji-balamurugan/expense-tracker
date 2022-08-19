import { AngularFireAuth } from '@angular/fire/compat/auth';
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FirestoreService } from './shared/services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AppResolver implements Resolve<boolean> {

  constructor(
    private _firestore: FirestoreService,
    private _authService: AngularFireAuth
  ) { }

  resolve(): Observable<boolean> {
    return this._authService
      .authState
      .pipe(
        tap((authState) => {
          console.log('authState:', authState);
          this._firestore.initializeApp(authState?.uid as string);
        }),
        map((authState) => !!authState)
      );
  }
}
