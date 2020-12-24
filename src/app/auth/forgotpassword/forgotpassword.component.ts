import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {
  private forgotPasswordForms: FormGroup = new FormGroup({
    email: new FormControl('', Validators.email)
  });
  constructor(private router: Router) { }

  ngOnInit() {}
  doSubmit(): void {
    console.log('kakak');
  }
  navgatetoRegister(): void {
    this.router.navigateByUrl('auth/register');
  }
  navgatetoLogin(): void {
    this.router.navigateByUrl('auth/login');
  }
}
