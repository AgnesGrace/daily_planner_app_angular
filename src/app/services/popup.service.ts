import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CancelTaskPopupComponent } from '../components/popup/cancel-task-popup/cancel-task-popup.component';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(private _dialog: MatDialog) {}

  /**
   *
   * @param taskProgress
   * @param currentTask
   * @returns
   */
  public cancleTaskDialog(taskProgress: number, currentTask: Task) {
    return this._dialog.open(CancelTaskPopupComponent, {
      data: {
        taskProgress,
        currentTask,
      },
    });
  }
}
