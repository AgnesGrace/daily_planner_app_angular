import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-start-task',
  templateUrl: './start-task.component.html',
  styleUrls: ['./start-task.component.scss'],
})
export class StartTaskComponent implements OnInit, OnDestroy {
  private _taskSubscription: Subscription;
  public tasks: Task[] = [];

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskSubscription = this._taskService
      .getTasks()
      .subscribe((allTasks) => {
        this.tasks = allTasks;
      });
  }

  public onSelectTask(selectedTaskId: string): void {
    this._taskService.startTask(selectedTaskId);
  }

  ngOnDestroy(): void {
    this._taskSubscription.unsubscribe();
  }
}
