import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(account => account.AccountModule).catch(e => console.log('Unable to load AccountModule', e))
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(user => user.UserModule).catch(e => console.log('Unable to load UserModule', e)),
    canActivate:[AuthGuard]
  },
  { path: '**', redirectTo: 'account' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
