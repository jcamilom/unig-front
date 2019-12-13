import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/public/home/home.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
