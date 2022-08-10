import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EntriesViewComponentModule } from 'src/app/shared/components/entries-view/entries-view.module';
import { AddExpenseModule } from '../add-expense/add-expense.module';
import { AddGoalPageModule } from '../add-goal/add-goal.module';
import { AddIncomeModule } from './../add-income/add-income.module';
import { AddEntriesPage } from './add-entries.page';

const routes: Routes = [
  {
    path: '',
    component: AddEntriesPage
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    EntriesViewComponentModule,
    AddExpenseModule,
    AddGoalPageModule,
    AddIncomeModule
  ],
  declarations: [
    AddEntriesPage,
  ],
})
export class AddEntriesPageModule { }
