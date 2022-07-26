import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestDatePage } from './test-date.page';

const routes: Routes = [
  {
    path: '',
    component: TestDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestDatePageRoutingModule {}
