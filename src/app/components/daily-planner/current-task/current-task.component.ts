import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { PopupService } from 'src/app/services/popup.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-current-task',
  templateUrl: './current-task.component.html',
  styleUrls: ['./current-task.component.scss'],
})
export class CurrentTaskComponent implements OnInit {
  private _taskInterval;
  public currentTask: Task = {} as Task;
  public taskProgress: number = 5;

  constructor(
    private _taskService: TaskService,
    private _popupService: PopupService
  ) {}

  ngOnInit(): void {
    this.currentTask = this._taskService.getCurrentTask();
    this.handleTaskInterval();
  }

  public onStopTask(): void {
    clearInterval(this._taskInterval);
    this._popupService
      .cancleTaskDialog(this.taskProgress, this.currentTask)
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this._taskService.cancelTask(this.taskProgress);
        } else {
          this.handleTaskInterval();
        }
      });
  }

  private handleTaskInterval(): void {
    const taskSteps = (this.currentTask.time / 100) * 1000;
    this._taskInterval = setInterval(() => {
      if (this.taskProgress < 100) {
        this.taskProgress = this.taskProgress + 5;
      }
      if (this.taskProgress >= 100) {
        this._taskService.finishedTask();
        clearInterval(this._taskInterval);
      }
    }, taskSteps);
  }
}
