import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location
  ) {  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  add(name: string, description: string, worthString: string): void {
    const worth: number = parseInt(worthString);
    const newTask: Task = {name, description, worth};
    this.taskService.saveTask(newTask)
      .subscribe(() => this.goBack());;
  }

}
