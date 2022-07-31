import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { redirectLoggedInToOverview } from './auth.guards';
import { AuthPage } from './auth.page';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'walkthrough',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLoggedInToOverview
    },
    loadChildren: () => import('./pages/walkthrough/walkthrough.module').then((m) => m.WalkthroughPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/Logout/Logout.module').then((m) => m.LogoutPageModule),
  },
];

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AuthPage]
})
export class AuthPageModule { }
