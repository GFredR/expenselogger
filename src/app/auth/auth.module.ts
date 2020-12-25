import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
      ReactiveFormsModule,
      AngularFireModule
  ]
})
export class AuthModule { }
