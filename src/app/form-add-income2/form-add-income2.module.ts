import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAddIncome2PageRoutingModule } from './form-add-income2-routing.module';

import { FormAddIncome2Page } from './form-add-income2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAddIncome2PageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormAddIncome2Page]
})
export class FormAddIncome2PageModule { }
