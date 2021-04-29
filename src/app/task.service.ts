import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskUrl = 'http://localhost:8094/tasks/';
  private tasks: Task[] = [];

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl)
    .pipe(
      catchError(this.handleError<Task[]>('getTasks', []))
    )
  }

  getTask(id: number): Observable<Task> {
    // const task = TASKS.find(h => h.id === id) as Task;
    this.getTasks().subscribe(res => this.tasks=res as Task[]);    
    return of(this.tasks.find(x => x.id === id)!);
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(this.taskUrl+task.id, task, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateTask'))
    );
  }

  saveTask(task: Task): Observable<any> {
    return this.http.post(this.taskUrl, task, this.httpOptions).pipe(
      catchError(this.handleError<any>('saveTask'))
    );
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(this.taskUrl+taskId, this.httpOptions).pipe(
      catchError(this.handleError<any>('saveTask'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  constructor(
    private http: HttpClient
  ) {}
}
