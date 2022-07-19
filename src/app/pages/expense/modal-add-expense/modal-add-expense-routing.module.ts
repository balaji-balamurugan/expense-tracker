import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddExpensePage } from './modal-add-expense.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddExpensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddExpensePageRoutingModule {}
