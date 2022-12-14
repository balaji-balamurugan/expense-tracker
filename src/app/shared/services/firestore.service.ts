/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Action, AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentChangeAction, DocumentReference, DocumentSnapshot, QueryFn } from '@angular/fire/compat/firestore';
import { FirebaseError } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {

  userAuthState!: firebase.User | null;
  private tenantID!: string;

  constructor(
    public afs: AngularFirestore,
    private _fbAuth: AngularFireAuth,
  ) {
    this._fbAuth.authState
      .subscribe((authState) => {
        this.userAuthState = authState;
      });
    console.log(this.tenantID);
  }

  /// ****** Get a Reference ****** ///
  col<T>(ref: string, queryFn?: QueryFn<firebase.firestore.DocumentData>): AngularFirestoreCollection<T> {
    return this.afs.collection<T>(`app/${this.tenantID}/${ref}`, queryFn);
  }

  doc<T>(ref: string): AngularFirestoreDocument<T> {
    return this.afs.doc<T>(`app/${this.tenantID}/${ref}`);
  }

  // -----------------------------------------------------------------------------------------------------
  //  *** Get Data From Firestore ***
  // -----------------------------------------------------------------------------------------------------

  doc$<T>(ref: string): Observable<T | FirebaseError> {
    return this.doc<T>(ref).snapshotChanges()
      .pipe(
        map((doc: Action<DocumentSnapshot<T>>) => doc.payload.data() as T),
        catchError((err: FirebaseError) => of(err)),
      );
  }

  col$<T>(ref: string, queryFn?: QueryFn<firebase.firestore.DocumentData>): Observable<T[] | FirebaseError> {
    return this.col<T>(ref, queryFn)
      .snapshotChanges().pipe(
        map((docs: DocumentChangeAction<T>[]) =>
          docs.map((a: DocumentChangeAction<T>) => a.payload.doc.data()) as T[]
        ),
        catchError((err: FirebaseError) => of(err)),
      );
  }

  colRoot<T>(ref: string, queryFn?: QueryFn<firebase.firestore.DocumentData>): AngularFirestoreCollection<T> {
    return this.afs.collection<T>(`${ref}`, queryFn);
  }

  docRoot<T>(ref: string): AngularFirestoreDocument<T> {
    return this.afs.doc<T>(`${ref}`);
  }

  docRoot$<T>(ref: string): Observable<T | FirebaseError> {
    return this.docRoot<T>(ref).snapshotChanges().pipe(
      map((doc: Action<DocumentSnapshot<T>>) => doc.payload.data() as T),
      catchError((err: FirebaseError) => of(err))
    );
  }

  colRoot$<T>(ref: string, queryFn?: QueryFn<firebase.firestore.DocumentData>): Observable<T[] | FirebaseError> {
    return this.colRoot<T>(ref, queryFn)
      .snapshotChanges()
      .pipe(
        map((docs: DocumentChangeAction<T>[]) => docs.map((a: DocumentChangeAction<T>) => a.payload.doc.data()) as T[]),
        catchError((err: FirebaseError) => of(err))
      );
  }

  // -----------------------------------------------------------------------------------------------------
  //  *** Get Data From Firestore With IDs ***
  // -----------------------------------------------------------------------------------------------------

  docWithIds$<T>(ref: string): Observable<T | FirebaseError> {
    return this.doc<T>(ref).snapshotChanges()
      .pipe(
        map((doc: Action<DocumentSnapshot<T>>) => ({
          ...doc.payload.data() as T,
          id: doc.payload.id
        })),
        catchError((err: FirebaseError) => of(err)),
      );
  }

  colWithIds$<T>(ref: string, queryFn?: QueryFn<firebase.firestore.DocumentData>): Observable<T[] | FirebaseError> {
    return this.col<T>(ref, queryFn).snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<T>[]) =>
          actions.map((a: DocumentChangeAction<T>) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        ),
        catchError((err: FirebaseError) => of(err)),
      );
  }

  newWriteBatch(): firebase.firestore.WriteBatch {
    return this.afs.firestore.batch();
  }

  async executeWriteBatch(batch: firebase.firestore.WriteBatch): Promise<void> {
    return await batch.commit();
  }

  // -----------------------------------------------------------------------------------------------------
  //  *** Write Data ***
  // -----------------------------------------------------------------------------------------------------

  async createWithID<T>(ref: string, data: T): Promise<void> {
    return await this.doc<T>(ref).set(data, { merge: true });
  }

  async add<T>(ref: string, data: T): Promise<DocumentReference<T>> {
    return await this.col<T>(ref).add(data);
  }

  async update<T>(ref: string, data: T): Promise<void> {
    return await this.doc<T>(ref).update(data);
  }

  async set<T>(ref: string, data: T): Promise<void> {
    return await this.doc<T>(ref).set(data);
  }

  async delete<T>(ref: string): Promise<void> {
    return await this.doc<T>(ref).delete();
  }

  // -----------------------------------------------------------------------------------------------------
  //  *** Utility Functions ***
  // -----------------------------------------------------------------------------------------------------

  initializeApp(tenantID: string): void {
    this.tenantID = tenantID;
  }

  geopoint(lat: number, lng: number): firebase.firestore.GeoPoint {
    return new firebase.firestore.GeoPoint(lat, lng);
  }

  timestamp(): number {
    return firebase.firestore.Timestamp.now().seconds * 1000;
  };

  createID(): string {
    return this.afs.createId();
  }

  wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
