import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAddIncomePage } from './modal-add-income.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAddIncomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAddIncomePageRoutingModule {}
