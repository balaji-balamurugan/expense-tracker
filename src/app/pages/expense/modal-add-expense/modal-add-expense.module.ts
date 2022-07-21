import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAddExpensePageRoutingModule } from './modal-add-expense-routing.module';

import { ModalAddExpensePage } from './modal-add-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAddExpensePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [ModalAddExpensePage],
})
export class ModalAddExpensePageModule {}
