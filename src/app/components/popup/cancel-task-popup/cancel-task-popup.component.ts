import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/interfaces/task';

@Component({
  selector: 'app-cancel-task-popup',
  templateUrl: './cancel-task-popup.component.html',
  styleUrls: ['./cancel-task-popup.component.scss'],
})
export class CancelTaskPopupComponent implements OnInit {
  public taskProgress: number;
  public currentTask: Task;
  constructor(
    private _dialogRef: MatDialogRef<CancelTaskPopupComponent>,
    @Inject(MAT_DIALOG_DATA) private _data
  ) {}

  ngOnInit(): void {
    this.taskProgress = this._data.taskProgress;
    this.currentTask = this._data.currentTask;
  }

  public onGoBack() {
    this._dialogRef.close(false);
  }
  public onCancelTask() {
    this._dialogRef.close(true);
  }
}
