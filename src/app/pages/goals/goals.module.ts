import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { GoalsPage } from './goals.page';


const routes: Routes = [
  {
    path: '',
    component: GoalsPage
  },
  {
    path: 'add-goal',
    loadChildren: () =>
      import('../entries/add-goal/add-goal.module').then((m) => m.AddGoalPageModule),
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GoalsPage]
})
export class GoalsPageModule { }
