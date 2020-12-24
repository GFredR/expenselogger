import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import {IonicModule} from '@ionic/angular';
import {AppFormsModule} from '../../core/modules/app-forms.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ForgotpasswordRoutingModule,
      IonicModule,
      AppFormsModule
  ]
})
export class ForgotpasswordModule { }
