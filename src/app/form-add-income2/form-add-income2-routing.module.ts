import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAddIncome2Page } from './form-add-income2.page';

const routes: Routes = [
  {
    path: '',
    component: FormAddIncome2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAddIncome2PageRoutingModule {}
