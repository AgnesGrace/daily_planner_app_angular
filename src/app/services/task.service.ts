import { BehaviorSubject, Subject, Subscription, take, tap } from 'rxjs';
import { Task } from '../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _currentTasks: Task = {} as Task;
  private _doneTasks: Task[] = [];
  private _tasks = new BehaviorSubject<Task[]>([
    {
      id: 'task1',
      name: 'Study for exam',
      description: 'Complete the first part of my lecture note',
      time: 120,
      taskState: 'new',
    },
    {
      id: 'task2',
      name: 'Visit my friend',
      description: 'Visit Bob in the evening',
      time: 10,
      taskState: 'finished',
    },
    {
      id: 'task3',
      name: 'Visit Grandma',
      description:
        ' 🏄 I have to see grandma today, an opportunity to eat good food.',
      time: 180,
      taskState: 'new',
    },

    {
      id: 'task4',
      name: 'Read',
      description: 'Read a chapter from a book of your choice.',
      time: 20,
      taskState: 'finished',
    },
  ]);
  public taskSubject = new Subject<Task>();

  public getTasks() {
    return this._tasks.asObservable();
  }

  public addNewTask(addedTask: Task): Subscription {
    return this._tasks
      .pipe(
        take(1),
        tap((tasks) => {
          this._tasks.next(tasks.concat(addedTask));
        })
      )
      .subscribe();
  }

  public startTask(taskId: string): void {
    this._tasks
      .pipe(
        take(1),
        tap((tasks) => {
          this._currentTasks = tasks.find((task) => task.id === taskId);
          this.taskSubject.next(this._currentTasks);
        })
      )
      .subscribe();
  }

  public getCurrentTask(): Task {
    return { ...this._currentTasks };
  }

  public cancelTask(taskProgress: number): void {
    this._doneTasks.push({
      ...this._currentTasks,
      taskState: 'cancelled',
      time: (this._currentTasks.time * taskProgress) / 100,
    });
    this._currentTasks = null;
    this.taskSubject.next(null);
  }

  public finishedTask(): void {
    this._doneTasks.push({
      ...this._currentTasks,
      taskState: 'finished',
    });
    this._currentTasks = null;
    this.taskSubject.next(null);
  }

  public getDoneTasks(): Task[] {
    return [...this._doneTasks];
  }
}
