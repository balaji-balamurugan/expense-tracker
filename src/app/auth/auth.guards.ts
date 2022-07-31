import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

export const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/auth/login']);
export const redirectLoggedInToOverview = () => redirectLoggedInTo(['overview']);
