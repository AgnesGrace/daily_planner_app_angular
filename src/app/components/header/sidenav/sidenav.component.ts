import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy {
  private _authStatusSubscription: Subscription;

  public isAuth: boolean = false;

  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private _authService: AuthService) {}
  ngOnInit(): void {
    this._authStatusSubscription = this._authService.authStatus.subscribe(
      (status) => {
        this.isAuth = status;
      }
    );
  }

  ngOnDestroy(): void {
    this._authStatusSubscription.unsubscribe();
  }

  public onClickListItem(): void {
    this.closeSidenav.emit();
  }
}
