import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDatePageRoutingModule } from './modal-date-routing.module';

import { ModalDatePage } from './modal-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalDatePageRoutingModule
  ],
  declarations: [ModalDatePage]
})
export class ModalDatePageModule { }
