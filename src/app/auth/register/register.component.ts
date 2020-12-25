import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
   registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router, private fireAuth: AngularFireAuth) { }

  ngOnInit() {}
  navgatetoLogin(): void {
    this.router.navigateByUrl('auth/login');
  }
  register(): void {
      const registerFormValues = this.registerForm.value;
      console.log(this.registerForm.value);
      this.fireAuth.createUserWithEmailAndPassword(
          registerFormValues.email,
          registerFormValues.password
      ).then((res) => {
          console.log(res);
      });
  }
}
