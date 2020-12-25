import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppFormsModule} from '../../core/modules/app-forms.module';




@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
      RouterModule.forChild([{path: '', component: LoginComponent}]),
      IonicModule,
      FormsModule,
      AppFormsModule,
      ReactiveFormsModule
  ]
})
export class LoginModule { }
