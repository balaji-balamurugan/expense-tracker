import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppResolver } from './app.resolver';
import { redirectUnauthorizedToLogin } from './auth/auth.guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    resolve: {
      appResolver: AppResolver
    },
    children: [
      {
        path: 'expense',
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin,
        },
        loadChildren: () => import('./pages/expense/expense.module').then((m) => m.ExpensePageModule),
      },
      {
        path: 'savings',
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin,
        },
        loadChildren: () => import('./pages/savings/savings.module').then((m) => m.SavingsPageModule),
      },
      {
        path: 'reminder',
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin,
        },
        loadChildren: () => import('./pages/reminder/reminder.module').then((m) => m.ReminderPageModule),
      },
      {
        path: 'income',
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin,
        },
        loadChildren: () => import('./pages/income/income.module').then((m) => m.IncomePageModule),
      },
      {
        path: 'overview',
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin,
        },
        loadChildren: () => import('./pages/overview/overview.module').then((m) => m.OverviewPageModule),
      },
      {
        path: 'entries-list',
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin,
        },
        loadChildren: () => import('./pages/entries/entries-list/entries-list.module').then((m) => m.EntriesListPageModule),
      },
      {
        path: 'add-entries',
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin,
        },
        loadChildren: () => import('./pages/entries/add-entries/add-entries.module').then((m) => m.AddEntriesPageModule),
      },
      {
        path: 'goals',
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToLogin,
        },
        loadChildren: () => import('./pages/goals/goals.module').then((m) => m.GoalsPageModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
