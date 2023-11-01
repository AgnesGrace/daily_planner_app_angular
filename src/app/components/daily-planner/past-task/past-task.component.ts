import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-past-task',
  templateUrl: './past-task.component.html',
  styleUrls: ['./past-task.component.scss'],
})
export class PastTaskComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['id', 'name', 'description', 'time', 'task-state'];
  public dataSource = new MatTableDataSource<Task>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _taskService: TaskService) {}

  ngOnInit(): void {
    this.dataSource.data = this._taskService.getDoneTasks();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public onFilter(event: Event): void {
    const filterVal = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterVal.trim().toLowerCase();
  }
}
