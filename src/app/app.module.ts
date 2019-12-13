import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { AddTeacherComponent } from './components/project/add-teacher/add-teacher.component';
import { TeacherListComponent } from './components/project/teacher-list/teacher-list.component';
import { HomeComponent } from './components/public/home/home.component';
import { NavbarComponent } from './components/public/navbar/navbar.component';
import { LoginComponent } from './components/public/login/login.component';
import { DashboardComponent } from './components/private/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    AddTeacherComponent,
    TeacherListComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
