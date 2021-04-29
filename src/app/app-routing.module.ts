import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'new', component: NewTaskComponent}
]


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
