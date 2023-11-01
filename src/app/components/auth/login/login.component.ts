import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthData } from 'src/app/interfaces/auth-data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormValues: FormGroup = null;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.loginFormInitialization();
  }

  public onSubmitLogin(): void {
    const authData: AuthData = {
      username: this.loginFormValues.value.username,
      email: this.loginFormValues.value.email,
      password: this.loginFormValues.value.password,
    };
    this._authService.loginUser(authData);
  }

  private loginFormInitialization(): void {
    this.loginFormValues = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }
}
