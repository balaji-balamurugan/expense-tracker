import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  private tenantID!: string;

  constructor(
    private afStorage: AngularFireStorage,
  ) { }

  async uploadFileToStorage(path: string, file: File): Promise<AngularFireUploadTask> {
    return await this.afStorage.upload(`resImg/${this.tenantID}/${path}`, file);
  }

  deleteFileStorage(path: string): Observable<void> {
    return this.afStorage.ref(`resImg/${this.tenantID}/${path}`).delete();
  }

  async getFileURLFromUpload<T>(imagePath: string, fileData: File): Promise<{ imgUrl: string; imgPath: string } | unknown> {
    const imgUploadTask = await this.uploadFileToStorage(imagePath, fileData);
    if (imgUploadTask) {
      const imageDownloadURL = await imgUploadTask.ref.getDownloadURL();
      if (imageDownloadURL) {
        return {
          imgUrl: imageDownloadURL,
          imgPath: imagePath
        } as unknown as T;
      }
    }
  }

  async getMultiImgUrl(imagePath: string, fileData: File, imgID: string): Promise<any> {
    const imgUploadTask = await this.uploadFileToStorage(imagePath, fileData);
    if (imgUploadTask) {
      const imageDownloadURL = await imgUploadTask.ref.getDownloadURL();
      if (imageDownloadURL) {
        return {
          imgUrl: imageDownloadURL,
          imgPath: imagePath,
          imgID
        };
      }
    }
  }

  initializeApp(tenantID: string): void {
    this.tenantID = tenantID;
  }

}
