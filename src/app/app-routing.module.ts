import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : 'addTask', component : AddTaskComponent },
  { path : 'addUser', component : AddUserComponent },
  { path : 'addProject', component : AddProjectComponent },
  { path : 'viewTask', component : ViewTaskComponent },
  { path : 'home', component : HomeComponent },
];



export const routing = RouterModule.forRoot(routes);
