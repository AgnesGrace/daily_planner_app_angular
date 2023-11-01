import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DailyPlannerComponent } from './components/daily-planner/daily-planner.component';
import { TasksComponent } from './components/daily-planner/tasks/tasks.component';
import { AuthGuards } from './guards/auth.guards';
const routes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuards] },
  {
    path: 'daily-planner',
    component: DailyPlannerComponent,
    canActivate: [AuthGuards],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
