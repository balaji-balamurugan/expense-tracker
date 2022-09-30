import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FirestoreService } from './shared/services/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AppResolver implements Resolve<boolean> {

  constructor(
    private firestore: FirestoreService,
    private authService: AngularFireAuth
  ) { }

  resolve(): Observable<boolean> {
    return this.authService
      .authState
      .pipe(
        tap((authState) => {
          console.log('authState:', authState?.uid);
          this.firestore.initializeApp(authState?.uid as string);
        }),
        map((authState) => !!authState)
      );
  }
}
