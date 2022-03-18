import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { ClienthomeComponent } from './components/clienthome/clienthome.component';
import { RoleGuard } from './guards/role.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'adminhome', component: AdminhomeComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'},
  children:[]},
  { path: 'clienthome', component: ClienthomeComponent, canActivate: [RoleGuard], data: {expectedRole: 'CLIENT'},
  children:[]},
  { path: 'login', component:LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
