import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from './services/resolvers/user.resolver';
import { UserDetailsComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
    resolve: { userList: UserResolver }
  },
  {
    path: ':id',
    component: UserDetailsComponent
  },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  // { path: '404', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
