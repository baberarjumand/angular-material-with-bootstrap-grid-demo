import { UserAuthService } from './../../services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userAuth: UserAuthService
  ) {
    this.loginFormGroup = this.formBuilder.group({
      username: ['admin', Validators.required],
      password: ['admin', Validators.required],
    });
  }

  ngOnInit(): void {}

  login(): void {
    this.userAuth.login();
  }
}
