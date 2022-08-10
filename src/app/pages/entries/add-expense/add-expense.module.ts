import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddExpensePage } from './add-expense.page';


@NgModule({
  declarations: [AddExpensePage],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [AddExpensePage]
})
export class AddExpenseModule { }
