import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'expense',
    loadChildren: () => import('./pages/expense/expense.module').then((m) => m.ExpensePageModule),
  },
  {
    path: 'savings',
    loadChildren: () => import('./pages/savings/savings.module').then((m) => m.SavingsPageModule),
  },
  {
    path: 'reminder',
    loadChildren: () => import('./pages/reminder/reminder.module').then((m) => m.ReminderPageModule),
  },
  {
    path: 'income',
    loadChildren: () => import('./pages/income/income.module').then((m) => m.IncomePageModule),
  },
  {
    path: 'overview',
    loadChildren: () => import('./pages/overview/overview.module').then((m) => m.OverviewPageModule),
  },
  {
    path: 'entries-list',
    loadChildren: () => import('./pages/entries/entries-list/entries-list.module').then((m) => m.EntriesListPageModule),
  },
  {
    path: 'add-entries',
    loadChildren: () => import('./pages/entries/add-entries/add-entries.module').then((m) => m.AddEntriesPageModule),
  },
  {
    path: 'goals',
    loadChildren: () => import('./pages/goals/goals.module').then((m) => m.GoalsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
