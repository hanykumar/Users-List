import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const appRoutes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '',   redirectTo: '/users', pathMatch: 'full' },
  { path: 'user/:id', component: UserComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
