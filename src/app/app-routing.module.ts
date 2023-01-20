import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponentTwo } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: UserDashboardComponent, canActivate:[AuthGuard] },
  {path: 'dashboardadmin', component: AdminDashboardComponentTwo, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
