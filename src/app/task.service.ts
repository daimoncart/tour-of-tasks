import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }

  getTask(id: number): Observable<Task> {
    const hero = TASKS.find(h => h.id === id) as Task;
    return of(hero);
  }

  constructor() { }
}
