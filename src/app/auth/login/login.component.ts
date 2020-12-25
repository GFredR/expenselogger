import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  addLog: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  constructor(private router: Router, private fireAuth: AngularFireAuth) {

  }

  ngOnInit() {}
  navgatetoRegister(): void {
    this.router.navigateByUrl('auth/register');
  }
  navgatetoForgotPassword(): void {
    this.router.navigateByUrl('auth/forgotpassword');
  }
  doLogin(): void {
    console.log(this.addLog.value);
    const loginFormValues = this.addLog.value;
    this.fireAuth.signInWithEmailAndPassword(
        loginFormValues.email,
        loginFormValues.password
    ).then((res) => {
      console.log(res);
    });
  }
}
