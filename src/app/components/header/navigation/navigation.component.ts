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
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  private _authSubscription: Subscription;

  public isAuth: boolean = false;

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authSubscription = this._authService.authStatus.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

  ngOnDestroy(): void {
    this._authSubscription.unsubscribe();
  }
  public onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }

  public onLogout(): void {
    this._authService.logoutUser();
  }
}
