import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LogoutPage } from './logout.page';

const routes: Route[] = [
  {
    path: '',
    component: LogoutPage
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogoutPage]
})
export class LogoutPageModule { }
