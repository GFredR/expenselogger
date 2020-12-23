import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  navgatetoRegister(): void {
    this.router.navigateByUrl('auth/register');
  }
  navgatetoForgotPassword(): void {
    this.router.navigateByUrl('auth/forgotpassword');
  }
}
