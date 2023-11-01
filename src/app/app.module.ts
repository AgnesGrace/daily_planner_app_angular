import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { DailyPlannerComponent } from './components/daily-planner/daily-planner.component';
import { TasksComponent } from './components/daily-planner/tasks/tasks.component';
import { CurrentTaskComponent } from './components/daily-planner/current-task/current-task.component';
import { StartTaskComponent } from './components/daily-planner/start-task/start-task.component';
import { PastTaskComponent } from './components/daily-planner/past-task/past-task.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { SidenavComponent } from './components/header/sidenav/sidenav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './pipe/truncate.pipe';
import { CancelTaskPopupComponent } from './components/popup/cancel-task-popup/cancel-task-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DailyPlannerComponent,
    TasksComponent,
    CurrentTaskComponent,
    StartTaskComponent,
    PastTaskComponent,
    NavigationComponent,
    SidenavComponent,
    TruncatePipe,
    CancelTaskPopupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
