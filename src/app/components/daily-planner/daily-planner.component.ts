import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-daily-planner',
  templateUrl: './daily-planner.component.html',
  styleUrls: ['./daily-planner.component.scss'],
})
export class DailyPlannerComponent implements OnInit, OnDestroy {
  private _taskSubjectSubscription: Subscription;

  public taskStarted: boolean = false;

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskSubjectSubscription = this._taskService.taskSubject.subscribe(
      (currentTask) => {
        if (currentTask) {
          this.taskStarted = true;
        } else {
          this.taskStarted = false;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this._taskSubjectSubscription.unsubscribe();
  }
}
