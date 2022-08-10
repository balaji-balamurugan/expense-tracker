import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddIncomePage } from './add-income.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  declarations: [AddIncomePage],
  exports: [AddIncomePage],
})
export class AddIncomeModule { }
