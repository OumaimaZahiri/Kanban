import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactformComponent } from './contactform/contactform.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { DevelopersListComponent } from './developers-list/developers-list.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'tasks', component: TasksListComponent },
  { path: 'developerslist', component: DevelopersListComponent },
  { path: 'developer/:id', component: DeveloperComponent },
  { path: 'contactform', component: ContactformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
