import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { AuthData } from '../interfaces/auth-data';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _user: User;

  public authStatus = new Subject<boolean>();

  constructor(private _router: Router) {}

  public registerUser(authData: AuthData): void {
    this._user = {
      id: Math.floor(Math.random() * 200).toString(),
      email: authData.email,
      password: authData.password,
    };
    this.handleDailyPlannerAuth();
  }

  public loginUser(authData: AuthData): void {
    this._user = {
      id: Math.floor(Math.random() * 200).toString(),
      email: authData.email,
      password: authData.password,
    };
    this.handleDailyPlannerAuth();
  }

  public logoutUser(): void {
    this._user = null;
    this.authStatus.next(false);
    this._router.navigateByUrl('/login');
  }
  /**
   *
   * @returns
   */
  public isAuth(): boolean {
    return this._user != null;
  }

  private handleDailyPlannerAuth(): void {
    this.authStatus.next(true);
    this._router.navigate(['/daily-planner']);
  }
}
