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
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLoggedInToOverview
    },
    loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/Logout/Logout.module').then((m) => m.LogoutPageModule),
  },
  {
    path: 'forgot-password', canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLoggedInToOverview
    },
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'sign-up',
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectLoggedInToOverview
    },
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'access-denied',
    loadChildren: () => import('./pages/access-denied/access-denied.module').then(m => m.AccessDeniedPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundPageModule)
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
