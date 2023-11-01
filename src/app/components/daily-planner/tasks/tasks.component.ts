import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  public displayedColumns = ['id', 'name', 'description', 'task-state', 'time'];
  public dataSource = new MatTableDataSource<Task>();

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this._taskService.getTasks().subscribe((tasks) => {
      this.dataSource.data = tasks;
    });
  }

  public onAddTask(task: NgForm): void {
    const addedTask: Task = {
      id: 'task' + (this.dataSource.data.length + 1),
      name: task.value.taskName,
      description: task.value.description,
      date: new Date(),
      taskState: 'new',
      time: 180,
    };
    this._taskService.addNewTask(addedTask);
    task.reset();
  }
}
