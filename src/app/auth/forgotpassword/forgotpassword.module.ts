import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import {IonicModule} from '@ionic/angular';
import {AppFormsModule} from '../../core/modules/app-forms.module';
import {ForgotpasswordComponent} from './forgotpassword.component';


@NgModule({
  declarations: [ForgotpasswordComponent],
  imports: [
    CommonModule,
    ForgotpasswordRoutingModule,
      IonicModule,
      AppFormsModule
  ]
})
export class ForgotpasswordModule { }
