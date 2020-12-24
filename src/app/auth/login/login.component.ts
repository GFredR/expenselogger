import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private login: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(private router: Router) { }

  ngOnInit() {}
  navgatetoRegister(): void {
    this.router.navigateByUrl('auth/register');
  }
  navgatetoForgotPassword(): void {
    this.router.navigateByUrl('auth/forgotpassword');
  }
  doLogin(): void {
    console.log(this.login.value);
  }
}
