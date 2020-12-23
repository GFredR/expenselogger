import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {IonicModule} from '@ionic/angular';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forChild([{path: '', component: LoginComponent}]),
      IonicModule
  ]
})
export class LoginModule { }
