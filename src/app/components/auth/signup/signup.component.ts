import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthData } from 'src/app/interfaces/auth-data';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public maxDate: Date = new Date();
  public showPassword: boolean = false;

  ngOnInit(): void {
    this.maxDate.setFullYear(this.maxDate.getFullYear());
  }
  constructor(private _authService: AuthService) {}

  public toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  public onSubmitSignupForm(signupFormVal: NgForm) {
    if (signupFormVal.valid) {
      const authData: AuthData = {
        username: signupFormVal.value.username,
        email: signupFormVal.value.email,
        password: signupFormVal.value.password,
      };
      this._authService.registerUser(authData);
    }
    signupFormVal.reset();
  }
}
